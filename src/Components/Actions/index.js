import React, { useEffect } from "react";
import classes from "./actions.module.scss";
import { gsap } from "gsap";
import { ReactComponent as HistoryIcon } from "../../Assets/History.svg";
import { ReactComponent as AddIcon } from "../../Assets/Add.svg";

export default function Index() {
  const historyIcon = React.createRef();
  const addRef = React.createRef();
  useEffect(() => {
    var tl = gsap.timeline({ yoyo: true, repeat: -1 });
    tl.to(addRef.current, {
      scale: 1.5,
      duration: 2,
    });
    tl.play();
    // gsap.to(historyIcon.current, {
    //   rotation: -360,
    //   duration: 2,
    //   ease: "none",
    //   repeat: -1,
    // });
  });
  return (
    <>
      <div className={classes.history}>
        <HistoryIcon ref={historyIcon} width={22} />
      </div>
      <div ref={addRef} className={classes.add}>
        <AddIcon width={15} />
      </div>
    </>
  );
}
