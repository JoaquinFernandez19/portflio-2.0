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
          brother. Two years ago i was introduced to web development by
          &quot;Jovenes a programar&quot;, a free course by Plan Ceibal and that
          was my first step. But it wasn&apos;t enough.
        </p>
        <p>
          I was still hungry of knowledge so i continued the journey by myself,
          the &quot;self-taught&quot; path wich at first seemed very scary but
          it turned out to be very good for me. All my life i've have been a very independent person and
          if i had to solve a problem, i would solve it even if it took me all
          day. Fixing computers, laptops and phones was very entertaining and
          development was even more, because bigger problems meant
          that when they got fixed you would get a very a pleasant feeling.
          That&apos;s my motivation and that&apos;s why i love this career.
        </p>
        <p>
          Helping people solve problems while i have fun fixing those puzzles.
          That for me is web development. And that&apos;s why i will continue
          improving at it.
        </p>
      </div>
      <div className="study">
        <h1>Where did i learn?</h1>
        <p>
          After &quot;Jovenes a programar&quot;, internet was a large ocean, but
          fortunately i found very good places to learn. Some of them are free,
          some are not, some are easier, some are harder, but at the end, i did
          learn and continue learning.
        </p>
        <ul>
          <li>
            <a href="https://www.theodinproject.com/home" target="blank">
              TheOdinProject:
            </a>{" "}
            This website is magical, it lets you follow a path, it gives you
            documentation, and its also very user friendly.
            Right now in the{" "}
            <a href="https://www.theodinproject.com/home" target="blank">
              TheOdinProject
            </a>{" "}
            i have finished the &quot;Frontend part&quot; and now i will proceed to
            dive into Node.js for backend development
          </li>
          <li>
            <a href="https://www.udemy.com/" target="blank">
              Udemy:
            </a>{" "}
            Udemy has a lot of content, from which you have to choose and pay. Here i have been studying the courses listed below:
            <br />
            <a
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              target="blank"
            >
              Javascript:
            </a>
             this was one of the most importants, here i&apos;ve gotten a very
            good solid basic knowledge of JavaScript.
            <br />
            <a href="https://www.udemy.com/course/react-redux/" target="blank">
              React:
            </a>
             this got me introduced to React and also gave me a brief
            introduction to Redux.
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/">MDN Web Docs:</a> No
            matter wich course i am taking, Mozilla Web Docs is the place
            where i always come back to learn exact details. It is a
            dictionary for web development and for some reason, i was made in a
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
