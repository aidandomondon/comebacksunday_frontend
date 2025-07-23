import { ReactElement, useEffect, useState } from "react";

// Returns a Date object whose days, hours, minutes, etc. represent
// the days, hours, minutes, etc. until it next turns Sunday in UTC+14.
function calculateCountdown() {
    // (1) Create Date object mimicking current time in kiribati
    const kiribatiNow = new Date(Date.now());   // get the current date in UTC
    kiribatiNow.setUTCHours(kiribatiNow.getUTCHours() + 14); // add 14 hours to simulate UTC+14
    
    // (2) Create Date object mimicking the start of the day next sunday in kiribati
    // - Add num. days until sunday to get a datetime within the next sunday
    const kiribatiDaysUntilSunday = (7 - kiribatiNow.getUTCDay()) % 7;
    const kiribatiStartOfSunday = new Date(kiribatiNow);
    kiribatiStartOfSunday.setUTCDate(kiribatiStartOfSunday.getUTCDate() + kiribatiDaysUntilSunday);
    // - Set hours, minutes, sec, millisec to 0 to get to the start of the day
    kiribatiStartOfSunday.setUTCHours(0); 
    kiribatiStartOfSunday.setUTCMinutes(0);
    kiribatiStartOfSunday.setUTCSeconds(0);
    kiribatiStartOfSunday.setUTCMilliseconds(0);

    // (3) Countdown = start of sunday in kiribati - current time in kiribati
    const countdownAsDate = new Date(kiribatiStartOfSunday - kiribatiNow);
    // subtract 1 day because Date objects measure time from January 1st not January 0th.
    countdownAsDate.setUTCDate(countdownAsDate.getUTCDate() - 1);   
    countdownAsJSON = {
        "days": date.getUTCDate(),
        "hours": date.getUTCHours(),
        "minutes": date.getUTCMinutes(),
        "seconds": date.getUTCSeconds()
    };
    return countdownAsJSON;
}

export default function Countdown() {
    const [countdown, setCountdown] = useState(calculateCountdown());

    useEffect(() => {
        setInterval(setCountdown(calculateCountdown), 1000)
    });

    return (
        <div>
            <div class="countdown-box">
                <p id="days">{countdown.days}</p>
                <p>Days</p>
            </div>
            <div class="countdown-box">
                <p id="hours">{countdown.hours}</p>
                <p>Hours</p>
            </div>
            <div class="countdown-box">
                <p id="minutes">{countdown.minutes}</p>
                <p>Minutes</p>
            </div>
            <div class="countdown-box">
                <p id="seconds">{countdown.seconds}</p>
                <p>Seconds</p>
            </div>
        </div>
    );
}