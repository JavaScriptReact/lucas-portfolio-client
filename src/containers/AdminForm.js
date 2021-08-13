import React from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/ArrowBack";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: 400,
    width: 400,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  icon: {
    transform: "scale(2)",
    margin: 25,
  },
}));

function AdminForm({ action }) {
  const classes = useStyles();

  const close = () => {
    action(false);
  };
  return (
    <>
      <Tooltip title="Close and Go back">
        <IconButton onClick={close} className={classes.icon}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <Paper className={classes.root}>
        <Typography color="primary" variant="h4">
          Admin Login Form
        </Typography>
        <form autoComplete="off">
          <TextField id="text" label="Add admin code ..." />
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default AdminForm;
