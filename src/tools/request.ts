import * as http from "http"
import { Request } from "../interfaces"

/**
 * http request sender.
 *
 * @param {String} url
 * @return {Promise<Request>} custom result object that has 3 properties... data, headers and statusCode.
 */
export default (url: string): Promise<Request> => new Promise((resolve, reject) => {
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
            if (data) result.data =  Buffer.concat(data)
            resolve(result)
        })
        res.on("close", (err: Error) => {
            reject(err)
        })
    }

    /* send http request */
    const req = http.request(url, callback)
    req.end()
})
