import React from "react";
// import Countdown from "../components/countdown";
// import dynamic from 'next/dynamic';

// // Must load countdown dynamically because it depends on the browser Window object.
// const DynamicCountdownWithNoSSR = dynamic(
//   () => import('../components/countdown'),
//   { ssr: false }
// )

// // Scrolls page 2 into view
// function scrollToPageTwo() {
//     const pageTwo = document.getElementById('page-two');
//     pageTwo.scrollIntoView({behavior: "smooth"});
// }

export default function About() {
  const [isAuthenticated, setIsAuthenticated] = React.useState<Boolean>(false);

  return (
    <div>
      <div id="page-one" class="page-full">
          <div id="title-block">
              <div id="title">
                  <h1>COME BACK SUNDAY</h1>
              </div>
              {/* <DynamicCountdownWithNoSSR/> */}
          </div>
          <div id="Menu">
            { 
              // isAuthenticated ? <a>FEED</a> : <React.Fragment>
              //   <a><p>LOG IN</p></a>
              //   <a><p>CREATE ACCOUNT</p></a>
              // </React.Fragment>
            }
            <p>ABOUT</p>
          </div>
      </div>
      <div id="page-two" class="page-full">
          <div id="about">
              <div id="about-header">
                  <h1>About</h1>
              </div>
              <div id="about-body">
                  <p>
                      <i>Come Back Sunday</i> is the only social media platform 
                      that is closed 6 days a week.
                  </p>
                  <p>
                      The rules are simple. Monday-Saturday,
                      the platform is closed for posting. No
                      new posts can be made.
                  </p>
                  <p>
                      On Sunday morning, the platform opens back up. Users can
                      share with each other whatever thoughts or highlights they'd 
                      like to share from their past week.
                  </p>
                  <p>
                      At the end of the day, the platform closes back up, so that we can
                      all recharge and enjoy our week.
                  </p>
                  <p>
                      No ads.
                  </p>
                  <p>
                      No recommended content.
                  </p>
                  <p>
                      No algorithm.
                  </p>
                  <p>
                      No AI integration.
                  </p>
                  <p>
                      The goal?– <i>no more rotting.</i>
                  </p>
                  <p>
                      One day a week, that's all we give ourselves.
                  </p>
                  <a id="get-started"><p>Get Started</p></a>
              </div>
          </div>
      </div>
    </div>
  );
}
