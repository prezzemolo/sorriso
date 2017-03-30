import * as http from "http"
import * as https from "https"
import * as URL from "url"
import { Request } from "../interfaces"

/**
 * http/https request sender.
 *
 * @param {string} url
 * @param {string} method "GET" or "HEAD". GET" by default.
 * @return {Promise<Request>} custom result object that has 3 properties... data, headers and statusCode.
 */
export default (url: string, method: string = "GET"): Promise<Request> => new Promise((resolve, reject) => {
    /**
     * pack options
     * https.RequestOptions is compatible with http.RequestOptions (Inheritance)
     */
    const urlObj = URL.parse(url)
    const options: https.RequestOptions = {
        "host": urlObj.hostname,
        "method": method,
        "path": urlObj.path
    }

    /**
     * callback
     * callback of http/https module's request method.
     */
    const callback = (res: http.IncomingMessage) => {
        const data: Buffer[] = []
        res.on("data", (chunk: Buffer) => {
            data.push(chunk)
        })
        res.on("end", () => {
            let result: Request = {
                headers: res.headers,
                statusCode: res.statusCode
            }
            if (data.length > 0) result.data =  Buffer.concat(data)
            resolve(result)
        })
        res.on("close", (err: Error) => {
            reject(err)
        })
    }

    /**
     * send request
     * automatic select http or https.
     */
    const req = urlObj.protocol === "http:"
        ? http.request(options, callback)
        : urlObj.protocol === "https:"
        ? https.request(options, callback)
        : null

    /**
     * @throw not supported protocol.
     */
    if (req === null) reject(new Error("not supported protocol."))

    /**
     * close request
     */
    req.end()
})
