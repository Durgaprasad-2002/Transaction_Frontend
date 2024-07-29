import React, { useState } from "react";
import "../styles/index.css";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { months } from "../Data/dataforComponents";

export default function MonthSelection() {
  const { month, HandleMonth } = useContext(AppContext);

  return (
    <>
      <select value={month} onChange={HandleMonth} className="select-month">
        {months.map((month, index) => {
          return (
            <option value={month.number} key={index} className="option-month">
              {month.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
