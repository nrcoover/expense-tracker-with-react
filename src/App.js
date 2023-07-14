import { React, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesList from "./components/Expenses/ExpensesList";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [ expenses, setExpenses ] = useState(INITIAL_EXPENSES)

  //   return React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h2', {}, "Let's get started!"),
  //     React.createElement(ExpensesList, { items: expenses })
  //   );
  // }

  const addExpenseItemHandler = (expenseItem) => {
    setExpenses((prevExpenses) => {
      return [expenseItem, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseItem={addExpenseItemHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
};

export default App;
