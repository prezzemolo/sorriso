/**
 * Sorriso
 * return type of module.
 */
export interface Sorriso {
    category?: string,
    comment: number,
    deleted?: boolean,
    description: string,
    image: string,
    mylist: number,
    reported?: boolean,
    time?: {
        string: string,
        hours: number,
        minutes: number,
        seconds: number
    },
    title: string,
    updated?: string,
    uploaded: string,
    user?: {
        nickname: string,
        id: number,
        icon: string,
    },
    view: number
}
