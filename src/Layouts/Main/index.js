import React from "react";
import Header from "../../Components/Header";
import classes from "./main.module.scss";

export default function index(props) {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <div className={classes.subContainer}>
          <div className={classes.view}>
            <div className={classes.viewWrapper}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
