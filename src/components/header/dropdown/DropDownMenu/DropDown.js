/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MenuItems } from "../HeaderItems";
import "./DropDown.css";
const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <ul
        className={dropDown ? "sub-menu clicked" : "sub-menu"}
        onClick={() => setDropDown(!dropDown)}
      >
        {MenuItems.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropDown(false)}
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

export default DropDown;
