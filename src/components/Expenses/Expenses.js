import React, { useState } from "react";

<<<<<<< HEAD
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import "../UI/Card.css";
import ExpenseFilter from "./ExpenseFilter";
=======
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
>>>>>>> 229d577fb20075a1489c39b96fd80dd3bcff53e0

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

<<<<<<< HEAD
=======
  const filteredExpenses = props.data.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

>>>>>>> 229d577fb20075a1489c39b96fd80dd3bcff53e0
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterSelect={filterSelectHandler}
          selectedValue={filteredYear}
          /* selectedValue attribute for 2-way binding */
          /* This will set 2020 as the default year in drop-down */
        />
<<<<<<< HEAD
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        />
=======
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
>>>>>>> 229d577fb20075a1489c39b96fd80dd3bcff53e0
      </Card>
    </div>
  );
};

export default Expenses;
