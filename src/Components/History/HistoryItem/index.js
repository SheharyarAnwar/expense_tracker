import React, { useRef } from "react";
import { ReactComponent as TrashIcon } from "../../../Assets/Trash.svg";
import classes from "./index.module.scss";
export default function Index({ description, amount, activateItem, active }) {
  //const [active, setactive] = useState(false);
  const ref = useRef();
  const activeStyle = {
    backgroundColor: "var(--yellow)",
  };

  return (
    <div className={classes.container} ref={ref}>
      {active ? <TrashIcon width={18} /> : <div />}
      <div
        className={classes.wrapper}
        style={active ? activeStyle : null}
        onClick={activateItem}
      >
        <p>{description}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
}
