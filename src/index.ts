import thumbClient from "./clients/thumb"
// import videoInfoClient from "./clients/video-info"

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
    },
    view: Number
}

export default async (videoId: string): Promise<Sorriso> => {
    /* validate niconico videoId*/
    const videoIdReg = /^(sm|so|nm|)([0-9]+)$/
    if (! videoIdReg.test(videoId)) throw new Error("not a valid niconico video identifier.")

    /* WIP */
    return null
}
