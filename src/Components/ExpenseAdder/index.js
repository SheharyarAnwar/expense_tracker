import React from "react";
import classes from "./index.module.scss";
import { ReactComponent as AddIcon } from "../../Assets/Add.svg";
export default function index() {
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <div className={classes.modalContainer}>
          <p>Add Transaction</p>
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Amount" />
        </div>
        <div className={classes.button}>
          <AddIcon width={15} />
        </div>
      </div>
    </div>
  );
}
