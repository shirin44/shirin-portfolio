import React from "react";

export default function Tab({ text, bgColorClass, onClick }) {
  return (
    <button type="button" className={`tab2 ${bgColorClass}`} onClick={onClick}>
      {text}
    </button>
  );
}