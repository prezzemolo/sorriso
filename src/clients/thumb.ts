import request from "../tools/request"
import * as xml2json from "xml2json"
import { Thumb } from "../interfaces"

/**
 * client of thumb api.
 *
 * @param {String} videoId niconico video identifier
 * @return {Object} thumb api result.
 */
export default async (videoId: String) => {
    const result = await request("http://ext.nicovideo.jp/api/getthumbinfo/" + videoId)

    /**
     * @throws api result's status code is wrong.
     *
     * at now, niconico api returns 200 status code if api processes request.
     * so reject if status code isn't 200.
     */
    if (result.statusCode !== 200) throw new Error("api result's status code is wrong.")

    /**
     * get object from Buffer.
     */
    const data = result.data.toString()
    const thumb: Thumb = xml2json.toJson(data, {object: true})

    /**
     * @throws api status is not 'ok'.
     */
    if (thumb.nicovideo_thumb_responce.status !== "ok") throw new Error("api status is not 'ok'.")

    /* return thumb data. */
    return thumb.nicovideo_thumb_responce.thumb
}
