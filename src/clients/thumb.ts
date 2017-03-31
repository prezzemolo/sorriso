import request from "../tools/request"
import * as xml2json from "xml2json"
import { ThumbAPI, ThumbAPITag, ThumbAPITagObject, Thumb } from "../interfaces"

/**
 * cast to boolean
 * why new method?
 *     Thumb API responce includes some "0" or "1" instead of boolean.
 *     so as difference from system's boolean casting, cast '0' to false.
 *
 * @param {string} special the "special" string.
 * @return {boolean} is special truthy?
 */
const castToBoolean = (special: string): boolean => {
    return special === "0" ? false : !! special
}

/**
 * extract category from ThumbAPITag[] or ThumbAPITag
 *
 * @param {ThumbAPITag[]|ThumbAPITag} tags ThumbAPI.nicovideo_thumb_response.thumb.tags.tag
 * @return {string} if category isn't set, undefined.
 */
const extractCategory = (tags: ThumbAPITag[] | ThumbAPITag): string => {
    /**
     * oh string! tags includes no categories.
     */
    if (typeof tags === "string") return undefined

    /**
     * oh array! include some ThumbAPITag!
     */
    if (Array.isArray(tags)) {
         // check array by for-of.
        for (const tag of tags) {
            // oh string...
            if (typeof tag === "string") continue
            // if category exist, that's it!
            if (tag.category) return tag["$t"]
        }

        // so... no return event happened on loop, no categories.
        return undefined
    }

    /**
     * finally, this is a ThumbAPITag as tags!
     */
    if (castToBoolean(tags.category)) return tags["$t"]

    /**
     * no return event happened?
     * so... there are no category tags...
     */
    return undefined
}

/**
 * client of thumb api.
 *
 * @param {string} videoId niconico video identifier
 * @return {Promise<object>} thumb api result.
 */
export default async (videoId: string) => {
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
     * prepare & stuff values into a return object.
     */
    const thumb = thumbAPI.nicovideo_thumb_response.thumb

    /**
     * can't HEAD request by everytime node happen an Error named "Parse Error",
     *     probably lighthttpd sends invailed HTTP TCP message...
     */
    const largeImageURL = thumb.thumbnail_url + ".L"
    const largeImageRes = await request(largeImageURL)
    const isLargeImage = largeImageRes.statusCode === 200

    /**
     * pack basic values into responce object!
     */
    const responce: Thumb = {
        comment: Number.parseInt(thumb.comment_num),
        description: thumb.description,
        image: isLargeImage ? largeImageURL : thumb.thumbnail_url,
        mylist: Number.parseInt(thumb.mylist_counter),
        title: thumb.title,
        uploaded: thumb.first_retrieve,
        user: {
            nickname: thumb.user_nickname,
            id: Number.parseInt(thumb.user_id),
            icon: thumb.user_icon_url
        },
        view: Number.parseInt(thumb.view_counter)
    }

    /**
     *  if thumb.tags.tag exist, search category.
     */
    if (thumb.tags.tag) {
        const category = extractCategory(thumb.tags.tag)
        if (category) responce.category = category
    }

    /**
     * if thumb.length is string, insert it!
     */
    if (typeof thumb.length === "string") responce.time = thumb.length

    /**
     * return thumb data! yeah.
     */
    return responce
}
