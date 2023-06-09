/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";

import arrowRightIcon from "../assets/chevron-right.svg";
import arrowDownIcon from "../assets/chevron-down.svg";

import "./DropDown.css";

export function Dropdown() {

  let {setIsSearch, setStringSearch}=useContext(SearchContext);
  let [hidden, setHidden] = useState(true);
  let [key, setKey] = useState("");

  const handleToggleMenu = () => setHidden(!hidden);

  const handleOnClick = (e) => {
    let buttonKey = e.target.dataset.key;
    setKey(buttonKey);
    let value = e.target.dataset.value;
    setIsSearch(false);
    // setValue(value);
    setStringSearch(value)
    handleToggleMenu();
  };

  let regions = [
    { value: "", text: "All" },
    { value: "africa", text: "Africa" },
    { value: "americas", text: "America" },
    { value: "asia", text: "Asia" },
    { value: "europe", text: "Europe" },
    { value: "oceania", text: "Oceania" },
  ];
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggleMenu}>
        <span className="dropdown-toggle-text">Filter by Region</span>
        <div className="dropdow_image-conainer">
          <img
            src={hidden ? arrowRightIcon : arrowDownIcon}
            alt="Icon arrow"
            className="dropdown_image"
          />
        </div>
      </button>
      <ul className={`dropdown-menu ${hidden && "hidden"}`}>
        
        {regions.map((el, index) => {
          let { value, text } = el;
          let keyElement= index.toString();
          return (
            <li key={keyElement}>
              <button
                data-key={keyElement}
                className={`menu-button ${key == keyElement ? "active" : ""}`}
                data-value={value}
                onClick={handleOnClick}
              >
                {text}
              </button>
            </li>
          );
        })}
       
      </ul>
    </div>
  );
}
