import thumbClient from "./clients/thumb"
import { Sorriso } from "./interfaces"

export default async (videoId: string): Promise<Sorriso> => {
    /* validate niconico videoId*/
    const videoIdReg = /^(sm|so|nm|)([0-9]+)$/
    if (! videoIdReg.test(videoId)) throw new Error("not a valid niconico video identifier.")

    try {
        return await thumbClient(videoId)
    } catch (e) {
        // there will be other clients trying... but there are noting now. re-throwing.
        throw e
    }
}
