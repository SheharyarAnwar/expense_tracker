import React from "react";

export default function Index({ balance }) {
  return (
    <div>
      <p>Your Balance</p>
      <p style={{ marginTop: "10px" }}>{balance}</p>
    </div>
  );
}
