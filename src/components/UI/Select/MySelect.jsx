import React from "react";
import classes from "./MySelect.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const MySelect = ({ options, onChange, value }) => {
  return (
    <div  className={classes.select__box}>
      <select
        className={classes.mainSelect}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option className={classes.mainOption} disabled value="value1">
          sort
        </option>
        {options.map((option) => (
          <option
            className={classes.mainOption}
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
