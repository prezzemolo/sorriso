import request from "../tools/request"
import * as xml2json from "xml2json"
import { ThumbAPI } from "../interfaces"

/**
 * client of thumb api.
 *
 * @param {String} videoId niconico video identifier
 * @return {Promise<Object>} thumb api result.
 */
export default async (videoId: String) => {
    const result = await request("http://ext.nicovideo.jp/api/getthumbinfo/" + videoId)

    /**
     * @throws api result's status code is wrong.
     * niconico api responses always have status code 200 if api processes requests.
     */
    if (result.statusCode !== 200) throw new Error("api result's status code is wrong.")

    /**
     * get object from Buffer.
     */
    const data = result.data.toString()
    const thumbAPI: ThumbAPI = xml2json.toJson(data, {object: true})

    /**
     * @throws api status is not 'ok'.
     */
    if (thumbAPI.nicovideo_thumb_response.status !== "ok") throw new Error("api status is not 'ok'.")

    /**
     * stuff values into a return object
     */
    const thumb = thumbAPI.nicovideo_thumb_response.thumb

    /* return thumb data. */
    return thumb

