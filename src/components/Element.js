import React from "react";

const Element = ({ element }) => {
  return (
    <div
      className={`Element ${element.category?.split(" ").join("_") || "empty"}`}
    >
      {element?.number ? element.number.toFixed(2) : ""}
    </div>
  );
};

export default Element;
