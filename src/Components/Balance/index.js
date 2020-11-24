import React, { useState } from "react";
export default function Index() {
  const [balance, setbalance] = useState(0);
  return (
    <div>
      <p>Your Balance</p>
      <p style={{ marginTop: "10px" }}>{balance}</p>
    </div>
  );
}
