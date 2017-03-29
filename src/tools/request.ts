import * as http from "http"
import * as URL from "url"
import { Request } from "../interfaces"

/**
 * http request sender.
 *
 * @param {string} url
 * @param {string} method "GET" or "HEAD". GET" by default.
 * @return {Promise<Request>} custom result object that has 3 properties... data, headers and statusCode.
 */
export default (url: string, method: string = "GET"): Promise<Request> => new Promise((resolve, reject) => {
    /* pack options */
    const urlObj = URL.parse(url)
    const options: http.RequestOptions = {
        "host": urlObj.hostname,
        "method": method,
        "path": urlObj.path
    }

    /* receiver */
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

    /* send http request */
    const req = http.request(options, callback)
    req.end()
})
