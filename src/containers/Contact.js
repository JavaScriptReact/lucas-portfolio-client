import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextArea from "@material-ui/core/TextareaAutosize";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  background: {
    width: "100%",
    height: "100%",
    background: "grey",
    position: "absolute",
    top: "100vh",
  },
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    opacity: "0",
    height: "60vh",
    width: "60vw",
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    height: "100%",
    width: "50%",
    background: "lightblue",
    minWidth: "300px",
    position: "relative",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "110%",
  },
  content: {
    width: "50%",
    height: "100%",
    background: "blue",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  area: {
    width: "70%",
    height: "200px",
    minWidth: "50%",
    maxWidth: "70%",
    fontWeight: "bold",
    fontSize: "16px",
    padding: 10,
    outline: "none",
    minHeight: 100,
    maxHeight: 150,
    borderRadius: 30,
  },
  field: {
    background: "white",
    outline: "none",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
}));

function Contact({ set_page_timeline }) {
  const classes = useStyles();
  const [tl] = useState(gsap.timeline());
  const main = useRef();
  const paper = useRef();

  useEffect(() => {
    tl.to(main.current, 1, {
      y: "-100vh",
    });
    tl.to(paper.current, 1, {
      opacity: 1,
      ease: "none",
    });
    set_page_timeline(tl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={classes.background} ref={main}>
      <Paper className={classes.root} ref={paper}>
        <div className={classes.image}>
          <img
            className={classes.img}
            src={
              "https://lucas-portfolio-server.herokuapp.com/images/contact us.jpg"
            }
            alt="contact-us-img"
          />
        </div>
        <div className={classes.content}>
          <TextField
            type="text"
            variant="outlined"
            label="Name"
            className={classes.field}
          />
          <TextField
            type="text"
            variant="outlined"
            label="Email"
            className={classes.field}
          />
          <TextArea
            placeholder="Message"
            spellCheck={false}
            className={classes.area}
          ></TextArea>
          <Button
            variant="contained"
            size="large"
            style={{ background: "red", color: "white", fontWeight: "bold" }}
          >
            Submit
          </Button>
        </div>
      </Paper>
    </section>
  );
}

export default Contact;
