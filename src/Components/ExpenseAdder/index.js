import React, { useRef, useEffect, useState } from "react";
import classes from "./index.module.scss";
import { ReactComponent as AddIcon } from "../../Assets/Add.svg";

//Redux
import { addTransaction } from "../../Store/Slices/Expense";
import { useDispatch } from "react-redux";

export default function Index(props) {
  const ref = useRef();
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const addNewTransaction = () => {
    var regex = /^-?(0|[1-9]\d*)(\.\d+)?$/;
    if (!regex.test(amount)) {
      return;
    }
    dispatch(addTransaction({ description, amount }));
    props.setVariant("actions");
  };
  const handleClickOutside = (event) => {
    if (!ref.current.contains(event.target)) {
      props.setVariant("actions");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={classes.overlay} onClick={handleClickOutside}>
      <div className={classes.modal} ref={ref}>
        <div className={classes.modalContainer}>
          <p>Add Transaction</p>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount (+/- Numbers Only)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={classes.button} onClick={addNewTransaction}>
          <AddIcon width={15} />
        </div>
      </div>
    </div>
  );
}
