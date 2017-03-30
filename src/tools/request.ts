import * as http from "http"
import * as https from "https"
import * as URL from "url"
import { Request, Package } from "../interfaces"

/**
 * load package.json for get version.
 * using require for cacheing.
 */
const packageJson: Package = require("../../package.json")

/**
 * http/https request sender.
 *
 * @param {string} url
 * @param {string} method "GET" or "HEAD". GET" by default.
 * @return {Promise<Request>} custom result object that has 3 properties... data, headers and statusCode.
 */
export default (url: string, method: string = "GET"): Promise<Request> => new Promise((resolve, reject) => {
    /**
     * @throw not supported method.
     */
    if (method !== "GET" && method !== "HEAD") reject(new Error("not supported method."))

    /**
     * pack options
     * https.RequestOptions is compatible with http.RequestOptions (Inheritance)
     */
    const urlObj = URL.parse(url)
    const options: https.RequestOptions = {
        "headers": {
            "User-Agent": `Mozilla/5.0 (compatible; ${packageJson.name}/${packageJson.version}; +https://www.npmjs.com/package/${packageJson.name})`
        },
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
        const result: Request = {
            headers: res.headers,
            statusCode: res.statusCode
        }

        /* if HEAD method, resolve result has no datas. */
        if (method === "HEAD") resolve(result)

        res.on("end", () => {
            if (data.length > 0) result.data =  Buffer.concat(data)
            resolve(result)
        })
        res.on("data", (chunk: Buffer) => {
            data.push(chunk)
        })
        res.on("close", (err: Error) => {
            reject(err)
        )}
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
