import React from "react";
import classes from "./container.module.scss";
import Actions from "../Actions/index";
import History from "../History/index";
export default function index(props) {
  return (
    <div className={classes.container}>
      {props.variant === "actions" ? (
        <Actions />
      ) : props.variant === "history" ? (
        <History />
      ) : null}
    </div>
  );
}
