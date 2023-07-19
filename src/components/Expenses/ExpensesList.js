import { React, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './ExpensesList.css';

const ExpensesList = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2023');

  const changeOfSelectedYearHandler = (enteredSelectedYear) => {
    setFilteredYear(enteredSelectedYear);
  }

  const filteredExpenseItemsByYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenseItemsByYear.length > 0) {
    expensesContent = filteredExpenseItemsByYear.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} 
      />
    ))
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selectedYear={filteredYear} 
          onChangeSelectedYear={changeOfSelectedYearHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpensesList;
