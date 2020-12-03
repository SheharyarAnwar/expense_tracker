import React, { useState } from "react";
import HistoryItem from "./HistoryItem/index";
import { ReactComponent as ArrowIcon } from "../../Assets/Arrow.svg";
import { removeTransaction } from "../../Store/Slices/Expense";
import { useSelector, useDispatch } from "react-redux";
import classes from "./index.module.scss";
export default function Index(props) {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(null);
  const { transactionHistory } = useSelector((state) => state.expenseReducer);
  const backHandler = () => {
    props.setVariant("actions");
  };
  const deleteItem = (val) => {
    console.log("delete Pressed for", val);
    dispatch(removeTransaction({ itemNumber: val }));
  };
  const activateItem = (val) => {
    setActiveItem(val);
  };
  const items = transactionHistory.map((val, index) => {
    return (
      <HistoryItem
        description={val.description}
        key={index}
        active={index === activeItem}
        activateItem={() => activateItem(index)}
        onDeletePressed={() => deleteItem(index)}
        amount={val.amount}
      />
    );
  });
  return (
    <div className={classes.container}>
      <p>History</p>
      <div className={classes.icon} onClick={backHandler}>
        <ArrowIcon width={10} />
        <p>Back</p>
      </div>
      <div className={classes.scrollableWrapper}>
        {items.length > 0 ? (
          [...items]
        ) : (
          <p style={{ marginTop: "20%", color: "var(--red)" }}>
            No Items To Show
          </p>
        )}
      </div>
    </div>
  );
}
