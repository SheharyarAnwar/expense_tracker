import React, { useContext } from "react";
import classes from "./container.module.scss";
import Actions from "../Actions/index";
import History from "../History/index";
import ExpenseAdder from "../ExpenseAdder/index";
import { ViewSwitcherContext } from "../../Context/viewSwitcher";
export default function Index(props) {
  const { variant, setVariant } = useContext(ViewSwitcherContext);
  console.log(variant);
  return (
    <div className={classes.container}>
      {variant === "actions" ? (
        <Actions setVariant={setVariant} />
      ) : variant === "history" ? (
        <History setVariant={setVariant} />
      ) : variant === "expense-modal" ? (
        <ExpenseAdder setVariant={setVariant} />
      ) : null}
    </div>
  );
}
