import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectHandler = (event) => {
    props.onFilterSelect(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
<<<<<<< HEAD
        <select onInput={selectHandler} value={props.selectedValue}>
=======
        <select onChange={selectHandler} value={props.selectedValue}>
>>>>>>> 229d577fb20075a1489c39b96fd80dd3bcff53e0
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
