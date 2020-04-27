import React from "react";
import "../styles/About.scss";
//icons
import { IoIosArrowDropup } from "react-icons/io";
const About = () => {
  return (
    <div className="about">
      <div className="background">
        <h1>My background</h1>
        <p>
          I was born in Montevideo 21 years ago. I live with my parents and my
          brother. 2 years ago i was introduced to web development by
          &quot;Jovenes a programar&quot; a free course by Plan Ceibal, that was
          my first step, but it wasn&apos;t enough. After finishing
          &quot;Jovenes a programar&quot; i tried to join the university of
          &quot;ORT&quot; but i didn&apos;t have the money, so i got job as a
          delivery, but i realised that the money wasn&apos;t enough because i
          also had to help my family with an income.
        </p>
        <p>
          So my best option was to continue studying all by myself, but that was
          easy for me, everything i learned in my life was self taught, so i was
          an expert in teaching myself new things. Right now i continue learning
          everyday, with the same focus and passion that i had at the start, i
          would really like to study and work in a place where i can practice
          the stuff i learned.
        </p>
        <p>
          With time i know i will have the chance to prove myself and work in
          the environment that i dream of, while doing the stuff that i really
          like.
        </p>
      </div>
      <div className="study">
        <h1>Where did i learn?</h1>
        <p>
          After &quot;Jovenes a programar&quot;, internet was an open ocean, but
          fortunely i found very good places to learn. Some of them are free,
          some are not, some are easier, some are harder, but at the end, i did
          learn and continue learning.
        </p>
        <ul>
          <li>
            <a href="https://www.theodinproject.com/home" target="blank">
              TheOdinProject:
            </a>{" "}
            This website is magic, it lets you follow a path, it gives you
            documentation, and it makes an effort to prevent holding your hand.
            Everything you do is in your work environment. Right now in the{" "}
            <a href="https://www.theodinproject.com/home" target="blank">
              TheOdinProject
            </a>{" "}
            i finished the &quot;Frontend part&quot; and now i will proceed to
            dive into Node.js for backend development
          </li>
          <li>
            <a href="https://www.udemy.com/" target="blank">
              Udemy:
            </a>{" "}
            Udemy has a lot of content, from wich you have to choose and pay. In
            here i have been doing the next courses:
            <br />
            <a
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              target="blank"
            >
              For Javascript
            </a>
            , this was one of the most importants, here i&apos;ve gotten a very
            good solid basic knowledge of JavaScript.
            <br />
            <a href="https://www.udemy.com/course/react-redux/" target="blank">
              And this one for React
            </a>
            , this got me introduced to React and also it gived me a brief
            introduction to Redux.
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/">MDN Web Docs:</a> No
            matter wich course i was following, mozilla web docs is the place
            where i always comeback to learn exact details. They are a
            dictionary for webdevelopment and for some reason, they do it in a
            way where no matter how complex the topic is, if you read a lot and
            take your time, you will undersantd.
          </li>
        </ul>
      </div>
      <div
        className="arrow-top "
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <IoIosArrowDropup />
        <p>Go back top!</p>
      </div>
    </div>
  );
};

export default About;
