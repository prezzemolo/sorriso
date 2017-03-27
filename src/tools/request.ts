import * as http from "http"

/**
 *  Result: type of result
 * 
 * @property {Buffer} data if receive data, it will be contained.
 * @property {Object} headers dictionary contains received http headers.
 * @property {Number} statusCode http statusCode.
 */
export type Result = {
    data?: Buffer,
    headers: any,
    statusCode: Number
}

/**
 * http request sender.
 * 
 * @param {String} url
 * @return {Promise<Result>} custom resolt object that has 3 properties... data, headers and statusCode.
 */
export default (url: String): Promise<Result> => new Promise((resolve, reject) => {
    /* receiver */
    const callback = res => {
        const data = []
        res.on("data", chunk => {
            data.push(chunk)
        })
        res.on("end", () => {
            let result: Result = {
                headers: res.headers,
                statusCode: res.statusCode
            }
            if (data) result.data =  Buffer.concat(data)
            resolve(result)
        })
        res.on("close", err => {
            reject(err)
        })
    }

    /* send http request */
    const req = http.request(url, callback)
    req.end()
})