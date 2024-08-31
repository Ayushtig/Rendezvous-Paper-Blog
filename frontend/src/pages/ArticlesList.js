import articles from "./articleContent";
import ArticlesLt from "../components/ArticlesLt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ArticlesList = () => {
  const boxref = useRef(null);
  useEffect(() => {
    gsap.to(boxref.current, {
      scrollTrigger: {
        trigger: boxref.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      rotateZ: 10,
      y: "50%",
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <h1
        style={{
          marginLeft: "-40%",
          marginBottom: "100px",
          marginTop: "50px",
          fontFamily: "gtsuper",
          fontSize: "50px",
        }}
      >
        Articles
      </h1>
      <div id="articles">
        <ArticlesLt articles={articles} />
      </div>

      <div id="homepage-last">
        <h1>
          Our App <br /> lets you:
        </h1>
        <img src="/mobile.png" id="img1" ref={boxref} alt="imag" />
        <div id="step1">
          <h2>
            <span>1</span> <br />
            <br />
            Sign up to the Rendezvous
          </h2>
        </div>
        <div id="step2">
          <h2>
            <span>2</span> <br />
            <br /> Save time and leave the stress to someone else. With
            Rendezvous app, setting up your next haircut appointment is free and
            easy
          </h2>
        </div>
        <div id="step3">
          <h2>
            <span>3</span> <br />
            <br />
            Receive reminders. You'll never forget or miss out on another
            appointment
          </h2>
        </div>
        <h1>
          Download <br /> now:{" "}
          <img
            width="110"
            height="110"
            src="https://img.icons8.com/wired/64/qr-code.png"
            alt="qr-code"
          />
        </h1>
        <img src="/googleplay.png" id="img2" alt="mag" />
      </div>
      <div id="homepage-foot">
        <h1 id="h11">
          Meet <br /> the <br /> best
        </h1>
        <h1 id="h12">
          of <br /> you
        </h1>
        <footer>
          <h3>
            INSTAGRAM{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4%"
              height="5%"
              viewBox="0 0 18 19"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <mask
                id="mask0_2001_241"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="14"
                height="15"
              >
                <rect
                  x="2"
                  y="2.5"
                  width="14"
                  height="14"
                  fill="currentColor"
                ></rect>
              </mask>
              <g mask="url(#mask0_2001_241)">
                <path
                  d="M3.7424 16.5L2 14.7576L11.8061 4.95156H3.34215V2.5H16V15.1579H13.5485V6.69397L3.7424 16.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </h3>
          <h3>
            FACEBOOK{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4%"
              height="5%"
              viewBox="0 0 18 19"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <mask
                id="mask0_2001_241"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="14"
                height="15"
              >
                <rect
                  x="2"
                  y="2.5"
                  width="14"
                  height="14"
                  fill="currentColor"
                ></rect>
              </mask>
              <g mask="url(#mask0_2001_241)">
                <path
                  d="M3.7424 16.5L2 14.7576L11.8061 4.95156H3.34215V2.5H16V15.1579H13.5485V6.69397L3.7424 16.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </h3>
          <h3>
            LINKEDIN{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4%"
              height="5%"
              viewBox="0 0 18 19"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <mask
                id="mask0_2001_241"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="14"
                height="15"
              >
                <rect
                  x="2"
                  y="2.5"
                  width="14"
                  height="14"
                  fill="currentColor"
                ></rect>
              </mask>
              <g mask="url(#mask0_2001_241)">
                <path
                  d="M3.7424 16.5L2 14.7576L11.8061 4.95156H3.34215V2.5H16V15.1579H13.5485V6.69397L3.7424 16.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </h3>
        </footer>
      </div>
    </>
  );
};

export default ArticlesList;
