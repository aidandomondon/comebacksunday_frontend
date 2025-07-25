import { useState, Fragment } from "react";
import dynamic from 'next/dynamic';
import styles from './about.module.css';

// Must load countdown dynamically because it depends on the browser Window object.
const DynamicCountdownWithNoSSR = dynamic(
    () => import('../components/countdown'),
    { ssr: false }
);

// Scrolls page 2 into view
function scrollToPageTwo() {
    const pageTwo = document.getElementById('pageTwo');
    pageTwo.scrollIntoView({behavior: "smooth"});
}

export default function About() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
            <>
                <div className={[styles.pageFull, styles.pageOne].join(' ')}>
                    <div className={styles.titleBlock}>
                        <div id="title">
                            <h1>COME BACK SUNDAY</h1>
                        </div>
                        <DynamicCountdownWithNoSSR />
                    </div>
                    <div className={styles.menu}>
                        {
                            isAuthenticated ? <a className={styles.menuItem}><p>FEED</p></a> : <Fragment>
                                <a className={styles.menuItem}><p>LOG IN</p></a>
                                <a className={styles.menuItem}><p>CREATE ACCOUNT</p></a>
                            </Fragment>
                        }
                        <a className={styles.menuItem}><p onClick={e => scrollToPageTwo()}>ABOUT</p></a>
                    </div>
                </div>
                <div id="pageTwo" className={[styles.pageFull, styles.pageTwo].join(' ')}>
                    <div className={styles.about}>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div className={styles.aboutBody}>
                            <p className={styles.aboutBodyText}>
                                <i>Come Back Sunday</i> is the only social media platform
                                that is closed 6 days a week.
                            </p>
                            <p className={styles.aboutBodyText}>
                                The rules are simple. Monday-Saturday,
                                the platform is closed for posting. No
                                new posts can be made.
                            </p>
                            <p className={styles.aboutBodyText}>
                                On Sunday morning, the platform opens back up. Users can
                                share with each other whatever thoughts or highlights they'd
                                like to share from their past week.
                            </p>
                            <p className={styles.aboutBodyText}>
                                At the end of the day, the platform closes back up, so that we can
                                all recharge and enjoy our week.
                            </p>
                            <p className={styles.aboutBodyText}>
                                No ads.
                            </p>
                            <p className={styles.aboutBodyText}>
                                No recommended content.
                            </p>
                            <p className={styles.aboutBodyText}>
                                No algorithm.
                            </p>
                            <p className={styles.aboutBodyText}>
                                No AI integration.
                            </p>
                            <p className={styles.aboutBodyText}>
                                The goal?– <i>no more rotting.</i>
                            </p>
                            <p className={styles.aboutBodyText}>
                                One day a week, that's all we give ourselves.
                            </p>
                            <a className={styles.getStarted}><p>Get Started</p></a>
                        </div>
                    </div>
                </div>
            </>
    );
}
