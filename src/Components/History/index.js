import React, { useState } from "react";
import HistoryItem from "./HistoryItem/index";
import classes from "./index.module.scss";
export default function Index() {
  const [activeItem, setActiveItem] = useState(null);
  const activateItem = (val) => {
    setActiveItem(val);
  };
  const items = [0, 1, 2, 3, 4, 5].map((val) => {
    return (
      <HistoryItem
        description="Lora"
        key={val}
        active={val === activeItem}
        activateItem={() => activateItem(val)}
        amount={250}
      />
    );
  });
  return (
    <div className={classes.container}>
      <p>History</p>
      <div className={classes.scrollableWrapper}>{[...items]}</div>
    </div>
  );
}
