import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

import './ExpensesList.css';

const ExpensesList = (props) => {
  
  const changeOfSelectedYearHandler = (enteredSelectedYear) => {
    console.log(enteredSelectedYear);
  }
  
  return (
    <div>
      <ExpenseFilter onChangeSelectedYear={changeOfSelectedYearHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
    
  );
}

export default ExpensesList;
