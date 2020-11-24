import React from "react";
import classes from "./viewer.module.scss";
export default function index(props) {
  const buttonColor =
    props.text === "Expense"
      ? { color: "var(--yellow)", backgroundColor: "var(--salmon)" }
      : null;
  return (
    <div className={classes.wrapper}>
      <div className={classes.capsule} style={buttonColor}>
        <p>{props.text}</p>
      </div>
      <p style={{ fontSize: "18px" }}>{props.amount}</p>
    </div>
  );
}
