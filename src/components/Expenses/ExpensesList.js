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
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selectedYear={filteredYear} 
          onChangeSelectedYear={changeOfSelectedYearHandler} />
        {props.items.map((expense) => ( 
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date} 
          />
        ))}
      </Card>
    </div>
    
  );
}

export default ExpensesList;
