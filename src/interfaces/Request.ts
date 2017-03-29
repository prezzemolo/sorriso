/**
 *  Request: interface of request
 *
 * @property {Buffer} data if receive data, it will be contained.
 * @property {Object} headers dictionary contains received http headers.
 * @property {Number} statusCode http statusCode.
 */
export interface Request {
    data?: Buffer,
    headers: any,
    statusCode: Number
}
