import React from "react";
import Viewer from "./Viewer/index";
import classes from "./tracker.module.scss";
export default function index(props) {
  return (
    <div className={classes.tracker}>
      <Viewer text="Income" amount={props.income} />
      <Viewer text="Expense" amount={props.expense} />
    </div>
  );
}
