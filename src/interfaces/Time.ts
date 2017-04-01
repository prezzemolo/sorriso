/**
 * Time
 * interface of time.
 */
export interface Time {
    years: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    total: number
}

/**
 * TimeToSec
 * internal interface of toSec.
 */
export interface TimeToSec {
    years(element: number): number,
    days(element: number): number,
    hours(element: number): number,
    minutes(element: number): number
}
