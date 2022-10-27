/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { SportItems } from "../HeaderItems";
import "./DropDownSport.css";
const DropDownSport = () => {
  const [dropDown3, setDropDown3] = useState(false);
  return (
    <>
      <ul
        className={dropDown3 ? "sport-menu clicked" : "sport-menu"}
        onClick={() => setDropDown3(!dropDown3)}
      >
        {SportItems.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropDown3(false)}
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

export default DropDownSport;
