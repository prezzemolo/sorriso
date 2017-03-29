/**
 * ThumbAPITag
 * internal type used in ThumbAPI
 */
export type ThumbAPITag = {
    lock?: string,
    category?: string,
    "$t": string
} | string

/**
 * ThumbAPI
 * internal interface of thumb api's response
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
            // ISO8601
            first_retrieve: string,
            // ex: '2:55'
            length: string,
            // ex: 'video'
            movie_type: string,
            // ex: '22716378', Number
            size_high: string,
            // ex: '8976386', Number
            size_low: string,
            // ex: '10', Number
            view_counter: string,
            // ex '0', Number
            comment_num: string,
            // ex: '0', Number
            mylist_counter: string,
            last_res_body: string | {},
            // ex: 'http://www.nicovideo.jp/watch/sm30924873'
            watch_url: string,
            thumb_type: string,
            // '0' or '1', Boolean
            enbeddable: string,
            // '0' or '1', Boolean
            no_live_play: string,
            tags: {
                // ex: 'jp'
                domain?: string,
                /**
                 * one tag:
                 *   if not category and locked tag be string,
                 *   else ThumbAPITag object.
                 * multiple:
                 *   - all tags aren't category and locked
                 *   ['a', 'b', 'c', ...]
                 *   - some tags are category or locked
                 *   [{lock: '1', '$t': 'a'}, 'b', 'c', ...]
                 */
                tag?: string | ThumbAPITag[] | ThumbAPITag
            }
        }
    }
}
