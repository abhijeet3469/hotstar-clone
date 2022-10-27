/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { TvItems } from "../HeaderItems";
import "./DropDownTv.css";
const DropDownTv = () => {
  const [dropDown1, setDropDown1] = useState(false);
  return (
    <>
      <ul
        className={dropDown1 ? "tv-menu clicked" : "tv-menu"}
        onClick={() => setDropDown1(!dropDown1)}
      >
        {TvItems.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropDown1(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDownTv;
