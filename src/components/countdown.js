import { useEffect, useState } from "react";
import styles from '../pages/countdown.module.css';

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
    const countdownAsJSON = {
        // subtract 1 day because Date objects measure time from January 1st not January 0th.
        "days": countdownAsDate.getUTCDate() - 1,
        "hours": countdownAsDate.getUTCHours(),
        "minutes": countdownAsDate.getUTCMinutes(),
        "seconds": countdownAsDate.getUTCSeconds()
    };
    return countdownAsJSON;
}

export default function Countdown() {
    const [countdown, setCountdown] = useState(calculateCountdown());

    useEffect(() => {
        setInterval(() => setCountdown(calculateCountdown()), 1000)
    }, []); // empty dependencies to ensure that setInterval is only called once

    return (
        <div className={styles.countdown}>
            <div className={styles.countdownBox}>
                <p id="days" className={styles.countdownText}>{countdown.days}</p>
                <p className={styles.countdownText}>Days</p>
            </div>
            <div className={styles.countdownBox}>
                <p id="hours" className={styles.countdownText}>{countdown.hours}</p>
                <p className={styles.countdownText}>Hours</p>
            </div>
            <div className={styles.countdownBox}>
                <p id="minutes" className={styles.countdownText}>{countdown.minutes}</p>
                <p className={styles.countdownText}>Minutes</p>
            </div>
            <div className={styles.countdownBox}>
                <p id="seconds" className={styles.countdownText}>{countdown.seconds}</p>
                <p className={styles.countdownText}>Seconds</p>
            </div>
        </div>
    );
}