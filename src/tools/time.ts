import { Time, TimeToSec } from "../interfaces"

/**
 * convert num of years, days, hours and minutes to seconds.
 */
const toSec: TimeToSec = {
    years:
        element => element * 60 * 60 * 24 * 365,
    days:
        element => element * 60 * 60 * 24,
    hours:
        element => element * 60 * 60,
    minutes:
        element => element * 60
}

/**
 * parse length string.
 * @param {string} time ex: "3:21"
 * @returns {Time}
 */
export default (time: string): Time => {
    // convert to array elements
    const elements = time.split(":").map((num) => Number.parseInt(num)).reverse()

    /**
     * @throws why passing empty string!
     */
    if (elements.length === 0) {
        throw new Error("why passing empty string!")
    }

    /**
     * @throws there are 6 or more elements.
     * over pattern "years:days:hours:minutes:seconds".
     */
    if (elements.length >= 6) {
        throw new Error("there are 6 or more elements.")
    }

    // initialize result object
    const result: Time = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        total: 0
    }

    // only seconds.
    if (elements.length === 1) {
        result.seconds = elements[0]
        result.total = elements[0]
        return result
    }

    // run loop!
    elements.forEach((current: number, index: number) => {
        /**
        * @throws there are 6 or more elements.
        * over pattern "years:days:hours:minutes:seconds".
        */
        if (Number.isNaN(current)) throw new Error ("invalid number was found on time string at " + (index + 1) + " from the right.")

        /**
         * switch, sum & insert
         */
        switch (index) {
            // case seconds
            case 0:
                result.total += current
                result.seconds = current
                break;
            // case minutes
            case 1:
                result.minutes = current
                result.total += toSec.minutes(current)
                break;
            // case hours
            case 2:
                result.hours = current
                result.total += toSec.hours(current)
                break;
            // case days
            case 3:
                result.days = current
                result.total += toSec.days(current)
                break;
            // case years
            case 4:
                result.years = current
                result.total += toSec.years(current)
                break;
        }
    })

    // return total seconds.
    return result
}
