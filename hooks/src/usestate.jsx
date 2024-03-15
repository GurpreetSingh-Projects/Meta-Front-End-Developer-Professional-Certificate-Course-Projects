import React, { useState } from "react";
export default function State() {
  const [value, setValue] = useState(0);
  return (
    <>
      {value}
      <button
        onClick={() => {
          setValue(10);
        }}
      >
        Click me
      </button>
    </>
  );
}
