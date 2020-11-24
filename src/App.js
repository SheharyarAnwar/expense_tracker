import React from "react";
import TrackerView from "./Views/TrackerView/index";
import Layouts from "./Layouts/index";
export default function App() {
  return (
    <>
      <TrackerView layout={Layouts.main} />
    </>
  );
}
