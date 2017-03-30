/**
 *  Request: interface of request
 *
 * @property {buffer} data if receive data, it will be contained.
 * @property {object} headers dictionary contains received http headers.
 * @property {number} statusCode http statusCode.
 */
export interface Request {
    data?: buffer,
    headers: any,
    statusCode: number
}
