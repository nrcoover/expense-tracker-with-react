import { React, useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2023');

  const changeOfSelectedYearHandler = (enteredSelectedYear) => {
    setFilteredYear(enteredSelectedYear);
  }

  const filteredExpenseItemsByYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selectedYear={filteredYear} 
          onChangeSelectedYear={changeOfSelectedYearHandler} />
        <ExpensesList 
          items={filteredExpenseItemsByYear} />
      </Card>
    </div>
  );
}

export default Expenses;
