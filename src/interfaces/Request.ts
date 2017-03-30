/**
 *  Request: interface of request
 *
 * @property {Buffer} data if receive data, it will be contained.
 * @property {object} headers dictionary contains received http headers.
 * @property {number} statusCode http statusCode.
 */
export interface Request {
    data?: Buffer,
    headers: any,
    statusCode: number
}
