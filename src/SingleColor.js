import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ hex, index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  // We need background based on rgb string so
  const bg = rgb.join(","); // Convert to string and split to string
  const hexVal = `#${hex}`;
  const clipHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexVal); // not returning any value
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2500);
    //cleanup
    return () => clearTimeout(timer);
  }, [alert]);
  return (
    <article
      className={`color ${index > 9 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={clipHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexVal}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
