/**
 * ThumbAPI
 * internal interface of thumb api's response
 *
 * note: nicovideo_thumb_response is optional in this interface, for
 *     resolve an error "src/clients/thumb.ts(28,11): error TS2322: Type '{}' is not assignable to type 'Thumb'.".
 */
export interface ThumbAPI {
    nicovideo_thumb_response?: {
        status: String,
        error?: {
            code: String,
            description: String
        },
        thumb?: {
            // ex: 'sm30924873'
            video_id: String,
            title: String,
            description: String,
            // ISO8601
            first_retrieve: String,
            // ex: '2:55'
            length: String,
            // ex: 'video'
            movie_type: String,
            // ex: '22716378', Number
            size_high: String,
            // ex: '8976386', Number
            size_low: String,
            // ex: '10', Number
            view_counter: String,
            // ex '0', Number
            comment_num: String,
            // ex: '0', Number
            mylist_counter: String,
            last_res_body: String | {},
            // ex: 'http://www.nicovideo.jp/watch/sm30924873'
            watch_url: String,
            thumb_type: String,
            // '0' or '1', Boolean
            enbeddable: String,
            // '0' or '1', Boolean
            no_live_play: String,
            tags: {
                // ex: 'jp'
                domain?: String,
                /**
                 * only one tag that isn't category and locked, be String.
                 * multiple, Array, but contains two paterns...
                 * - all tags aren't category and locked
                 * ['a', 'b', 'c', ...]
                 * - some tags are category or locked
                 * [{lock: '1', '$t': 'a'}, 'b', 'c', ...]
                 */
                tag?: String | String[] | Object[]
            }
        }
    }
}
