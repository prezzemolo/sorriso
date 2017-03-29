/**
 * Thumb
 * internal interface of thumb api's response
 *
 * note: nicovideo_thumb_response is optional in this interface, for
 *     resolve an error "src/clients/thumb.ts(28,11): error TS2322: Type '{}' is not assignable to type 'Thumb'.".
 */
export interface Thumb {
    nicovideo_thumb_response?: {
        status: String,
        error?: {
            code: String,
            description: String
        },
        thumb?: any
    }
}
