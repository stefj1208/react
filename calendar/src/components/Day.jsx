import React from "react";

function Day({ jour, className, onClick }) {
  return <div className={className} onClick={onClick}>{jour}</div>;
}

export default Day;
