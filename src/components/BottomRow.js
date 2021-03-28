import React from "react";
import Element from "./Element";
const BottomRow = ({ elements }) => {
  return (
    <div className='BottomRow'>
      {elements.map((el, index) => (
        <Element element={el} key={index} />
      ))}
    </div>
  );
};

export default BottomRow;
