import React, { useRef } from "react";
import { ReactComponent as TrashIcon } from "../../../Assets/Trash.svg";
import classes from "./index.module.scss";
export default function Index({
  description,
  amount,
  activateItem,
  active,
  onDeletePressed,
}) {
  //const [active, setactive] = useState(false);
  const ref = useRef();
  const activeStyle = {
    backgroundColor: "var(--yellow)",
  };

  return (
    <div className={classes.container} ref={ref} onMouseOver={activateItem}>
      {active ? <TrashIcon width={18} onClick={onDeletePressed} /> : <div />}
      <div className={classes.wrapper} style={active ? activeStyle : null}>
        <p>{description}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
}
