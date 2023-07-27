import { React, useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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
        <ExpensesChart expenses={filteredExpenseItemsByYear} />
        <ExpensesList 
          items={filteredExpenseItemsByYear} />
      </Card>
    </div>
  );
}

export default Expenses;
