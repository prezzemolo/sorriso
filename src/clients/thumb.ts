import request from "../tools/request"
import * as xml2json from "xml2json"

/**
 * thumb: internal type of thumb api's responce
 * 
 * note: nicovideo_thumb_responce is optional in this type, for
 *     resolve an error "src/clients/thumb.ts(28,11): error TS2322: Type '{}' is not assignable to type 'thumb'.".
 */
type thumb = {
    nicovideo_thumb_responce?: {
        status: String,
        error?: {
            code: String,
            description: String
        },
        thumb?: any
    }
}

/**
 * client of thumb api.
 * 
 * @param {String} videoId niconico video identifier
 * @return {Object} thumb api result.
 */
export default async (videoId) => {
    const result = await request("http://ext.nicovideo.jp/api/getthumbinfo/" + videoId)

    /**
     * error: api result's status code is wrong.
     * 
     * at now, niconico api returns 200 status code if api processes request.
     * so reject if status code isn't 200.
     */
    if (result.statusCode !== 200) throw new Error("api result's status code is wrong.")

    /**
     * get object from Buffer.
     */
    const data = result.data.toString()
    const thumb: thumb = xml2json.toJson(data, {object: true})

    /**
     * error: api status is not 'ok'.
     */
    if (thumb.nicovideo_thumb_responce.status !== "ok") throw new Error("api status is not 'ok'.")

    /* return thumb data. */
    return thumb.nicovideo_thumb_responce.thumb
}
