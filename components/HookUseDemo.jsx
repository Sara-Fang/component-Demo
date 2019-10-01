import React, { Component, useState } from "react";

export const HookDemo = () => {
  const [curState, setState] = useState(0);
  return (
    <div>
      {curState}times
      <button onClick={() => setState(curState + 1)}>add time</button>
    </div>
  );
};
