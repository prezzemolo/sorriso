/**
 * Sorriso
 * return type of module.
 */
export interface Sorriso {
    category: string,
    comment: Number,
    deleted: Boolean,
    description: string,
    image: string,
    mylist: Number,
    reported: Boolean,
    time: {
        string: string,
        hours: Number,
        minutes: Number,
        seconds: Number
    },
    title: string,
    updated: string,
    uploaded: string,
    user: {
        nickname: string,
        id: Number,
        image: string,
        secret: Boolean
    } | null,
    view: Number
}
