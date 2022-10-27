/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MovieItems } from "../HeaderItems";
import "./DropDownMovie.css";
const DropDownMovie = () => {
  const [dropDown2, setDropDown2] = useState(false);
  return (
    <>
      <ul
        className={dropDown2 ? "movie-menu clicked" : "movie-menu"}
        onClick={() => setDropDown2(!dropDown2)}
      >
        {MovieItems.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropDown2(false)}
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

export default DropDownMovie;
