import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import gsap from "gsap";

const filters = [
  "front-end",
  "back-end",
  "full-stack",
  "dev-ops",
  "MERN",
  "MongoDB",
  "React.js",
  "Node.js",
];

function Portfolio({ set_page_timeline }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [tl] = useState(new gsap.timeline());

  useEffect(() => {
    tl.to(".portfolio", 0.5, {
      y: "-100vh",
    });
    tl.to(".block", 0.5, {
      stagger: 0.05,
      opacity: 1,
      display: "block",
    });
    tl.to(".project", 0.5, {
      stagger: 0.1,
      opacity: 1,
      display: "block",
    });
    set_page_timeline(tl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filter = (name) => {
    history.push(`${path}?filter=${name}`);
  };

  return (
    <>
      <section className="portfolio">
        <div className="filters">
          {filters.map((filt) => {
            return (
              <div onClick={() => filter(filt)} className="block">
                {filt}
              </div>
            );
          })}
        </div>
        <div className="content">
          {history && (
            <div className="main">
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
