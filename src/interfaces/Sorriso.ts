/**
 * Sorriso
 * return type of module.
 */
export interface Sorriso {
    category: String,
    comment: Number,
    deleted: Boolean,
    description: String,
    image: String,
    mylist: Number,
    reported: Boolean,
    time: {
        string: String,
        hours: Number,
        minutes: Number,
        seconds: Number
    },
    title: String,
    updated: String,
    uploaded: String,
    user: {
        nickname: String,
        id: Number,
        image: String,
        secret: Boolean
    } | null,
    view: Number
}
