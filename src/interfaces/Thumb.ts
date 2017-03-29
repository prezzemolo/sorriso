/**
 * Thumb
 * internal interface of thumb api's responce
 *
 * note: nicovideo_thumb_responce is optional in this interface, for
 *     resolve an error "src/clients/thumb.ts(28,11): error TS2322: Type '{}' is not assignable to type 'Thumb'.".
 */
export interface Thumb {
    nicovideo_thumb_responce?: {
        status: String,
        error?: {
            code: String,
            description: String
        },
        thumb?: any
    }
}
