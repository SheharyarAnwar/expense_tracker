import React from "react";
import Header from '../../Components/Header'
import classes from "./main.module.scss";

export default function index() {
  return <div className={classes.main}>
      <div className={classes.container}>
          <Header/>
      </div>
  </div>;
}
