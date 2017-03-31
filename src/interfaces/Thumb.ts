/**
 * ThumbAPITagObject
 * internal interface used in ThumbAPITag.
 */
export interface ThumbAPITagObject {
    // '0' or '1', boolean
    lock?: string,
    // '0' or '1', boolean
    category?: string,
    "$t": string
}

/**
 * ThumbAPITag
 * internal type used in ThumbAPI.
 *
 * ThumbAPI.niconico_thumb_responce.thumb.tags.tag either be
 *     ThumbAPITagObject or string.
 */
export type ThumbAPITag =  ThumbAPITagObject | string

/**
 * ThumbAPI
 * internal interface of thumb api's response.
 *
 * note: nicovideo_thumb_response is optional in this interface, for
 *     resolve an error "src/clients/thumb.ts(28,11): error TS2322: Type '{}' is not assignable to type 'Thumb'.".
 */
export interface ThumbAPI {
    nicovideo_thumb_response?: {
        status: string,
        error?: {
            code: string,
            description: string
        },
        thumb?: {
            // ex: 'sm30924873'
            video_id: string,
            title: string,
            description: string,
            thumbnail_url: string,
            // ISO8601
            first_retrieve: string,
            // ex: '2:55' or {}
            length: string | {},
            // ex: 'flv', 'mp4'
            movie_type: string,
            // ex: '22716378', number
            size_high: string,
            // ex: '8976386', number
            size_low: string,
            // ex: '10', number
            view_counter: string,
            // ex '0', number
            comment_num: string,
            // ex: '0', number
            mylist_counter: string,
            // {} as no comments
            last_res_body: string | {},
            watch_url: string,
            // ex: 'video'
            thumb_type: string,
            // '0' or '1', boolean
            enbeddable: string,
            // '0' or '1', boolean
            no_live_play: string,
            tags: {
                // ex: 'jp'
                domain?: string,
                // array of ThumbAPITag or a ThumbAPITag
                tag?: ThumbAPITag | ThumbAPITag[]
            },
            // ex: '36489138', number
            user_id: string,
            user_nickname: string,
            user_icon_url: string
        }
    }
}

/**
 * Thumb
 * return type of Thumb client.
 */
export interface Thumb {
    // sometime category doesn't exist.
    category?: string,
    comment: number,
    description: string,
    image: string,
    mylist: number,
    // sometime buggy API doesn't return length, once it happened requesting sm6948931.
    time?: string,
    title: string,
    // ISO8601
    uploaded: string,
    user: {
        nickname: string,
        id: number,
        icon: string
    },
    view: number
}
