import React from "react";
import Element from "./Element";

const Table = ({ elements }) => {
  return (
    <div className='Table'>
      {elements.map((el, index) => (
        <Element element={el} key={index} />
      ))}
    </div>
  );
};

export default Table;
