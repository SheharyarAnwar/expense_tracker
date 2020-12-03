import React, { createContext, useState } from "react";
export const ViewSwitcherContext = createContext();

const ViewSwitcher = (props) => {
  const [variant, setVariant] = useState("actions");

  return (
    <ViewSwitcherContext.Provider value={{ variant, setVariant }}>
      {props.children}
    </ViewSwitcherContext.Provider>
  );
};

export default ViewSwitcher;
