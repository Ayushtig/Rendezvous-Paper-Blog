import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
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
      <div id="homepage">
        <h1>Paper</h1>
      </div>
      <h1>Hello, welcome to my Tech haven</h1>
      <br />
      <p>
        Hello and welcome to my corner of the internet! I’m thrilled to have you
        here at my blog, a space dedicated to sharing insights, tutorials, and
        deep dives into the ever-evolving world of web development, with a
        special focus on the MERN stack. In today’s fast-paced digital
        landscape, the demand for skilled developers who can craft dynamic,
        responsive, and scalable applications is higher than ever. Whether
        you’re a seasoned developer, a curious beginner, or someone simply
        looking to expand your technical knowledge, this blog is designed with
        you in mind. The MERN stack, comprising MongoDB, Express.js, React.js,
        and Node.js, has emerged as a powerful and popular choice for full-stack
        JavaScript development. Its ability to handle everything from front-end
        user interfaces to back-end databases makes it an essential toolset for
        modern web developers. Here’s why I’ve chosen to focus on it: Unified
        Language: With JavaScript running across the stack, from the browser to
        the server, the MERN stack streamlines development processes, making it
        easier to maintain and scale applications.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>What You’ll Find Here</h2>
        <br />
        <p>
        This blog is a treasure trove of technical content aimed at helping you
        master the MERN stack and beyond. Here’s a glimpse of what you can
        expect: In-Depth Tutorials: Step-by-step guides that walk you through
        building real-world projects, from setting up your development
        environment to deploying your application on the cloud. Best Practices:
        Tips and tricks to write clean, efficient, and maintainable code,
        ensuring that your projects are not only functional but also scalable
        and easy to manage. Latest Trends and Updates: Stay ahead of the curve
        with articles covering the latest trends, updates, and advancements in
        the MERN stack and related technologies. Problem-Solving Techniques:
        Encountered a bug or a roadblock in your project? I’ll share my
        experiences and solutions to common (and not-so-common) issues you might
        face during development. Project Ideas: Looking for inspiration? Explore
        project ideas that challenge your skills and help you apply what you’ve
        learned in creative ways.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>A Learning Journey</h2>
        <br />
        <p>
        My goal with this blog is not just to provide information but to create
        a community where learning is collaborative and continuous. I believe
        that the best way to grow as a developer is to engage with others, share
        knowledge, and stay curious. Whether you’re reading an article, leaving
        a comment, or reaching out with questions, I encourage you to take an
        active role in this learning journey.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Join the Conversation</h2>
        <br /><p>
        As technology evolves, so will this blog. I’m committed to keeping the
        content fresh, relevant, and, most importantly, useful to you. I invite
        you to bookmark this page, subscribe to my newsletter, and follow me on
        social media to stay connected. Thank you for visiting, and I look
        forward to growing together as we explore the fascinating world of web
        development. Happy coding!
      </p>

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

export default Home;
