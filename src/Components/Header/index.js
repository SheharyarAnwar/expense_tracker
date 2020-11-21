import React from "react";
import classes from "./header.module.scss";

export default function index(props) {
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>Expense Tracker</h2>
    </div>
  );
}
