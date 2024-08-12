"use client";

import React from "react";

function Button() {
  return (
    <button
      className="bg-green-800 rounded-sm px-2"
      onClick={() => console.log("I have clicked here .. ")}
    >
      Click Here .. client component
    </button>
  );
}

export default Button;
