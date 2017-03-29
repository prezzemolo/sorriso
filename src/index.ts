import thumbClient from "./clients/thumb"
// import videoInfoClient from "./clients/video-info"
import { Sorriso } from "./interfaces"

export default async (videoId: string): Promise<Sorriso> => {
    /* validate niconico videoId*/
    const videoIdReg = /^(sm|so|nm|)([0-9]+)$/
    if (! videoIdReg.test(videoId)) throw new Error("not a valid niconico video identifier.")

    /* WIP */
    return null
}
