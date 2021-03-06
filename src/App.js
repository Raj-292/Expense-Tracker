import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 225,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 65000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 3000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 12500,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //const [filterYear, setFilterYear] = useState("");

  // const addExpenseHandler = (expense) => {
  //   setExpenses([...expenses, expense]);
  // };

  /* Since we are depending on the previous state snapshot, we will
     use the function form for setExpenses */

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //Here react ensures that prevExpenses has the latesh snapshot of the expenses state
      console.log(expense.date.year);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
