import React, { useEffect } from "react";
import classes from "./actions.module.scss";
import { gsap } from "gsap";
import { ReactComponent as HistoryIcon } from "../../Assets/History.svg";
import { ReactComponent as AddIcon } from "../../Assets/Add.svg";

export default function Index(props) {
  const historyIcon = React.createRef();
  const addRef = React.createRef();
  const addIconClicked = () => {
    props.setVariant("expense-modal");
  };
  useEffect(() => {
    var tl = gsap.timeline({ yoyo: true, repeat: -1 });
    tl.to(addRef.current, {
      scale: 1.4,
      duration: 1.5,
    });
    tl.play();
  });
  const historyPressedAction = () => {
    props.setVariant("history");
  };
  return (
    <>
      <div className={classes.history}>
        <HistoryIcon
          ref={historyIcon}
          onClick={historyPressedAction}
          width={22}
        />
      </div>
      <div className={classes.animationWrapper}>
        <div className={classes.add} onClick={addIconClicked}>
          <AddIcon width={15} />
        </div>
        <span ref={addRef} className={classes.pulsar} />
      </div>
    </>
  );
}
