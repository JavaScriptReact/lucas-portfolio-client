import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

function Courses({ set_page_timeline }) {
  const courses = useRef(null);
  const [tl] = useState(gsap.timeline());

  useEffect(() => {
    tl.to(courses.current, 1, {
      y: "-100vh",
    }).to(document.querySelectorAll(".content section"), 1, {
      stagger: 0.2,
      opacity: 1,
      display: "grid",
      ease: "back.out",
    });
    set_page_timeline(tl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="services" ref={courses}>
      <img
        src={"https://lucas-portfolio-server.herokuapp.com/images/about.jpg"}
        alt="background"
        className="background"
      />
      <main className="content">
        <section className="design">
          <h1>Design</h1>
        </section>
        <section className="web design">
          <h1>Web Design</h1>
        </section>
        <section className="web development">
          <h1>Web Development</h1>
        </section>
        <section className="E-commerence">
          <h1>E-commernce</h1>
        </section>
      </main>
    </section>
  );
}

export default Courses;
