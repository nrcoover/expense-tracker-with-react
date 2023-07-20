import React, { useState } from "react";

import "./NewExpense.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('')
  //   const [enteredDate, setEnteredDate] = useState('')
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // set(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
    setUserInput((previousState) => {
        return {
          ...previousState,
          enteredAmount: event.target.value,
        };
      });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
    setUserInput((previousState) => {
        return {
          ...previousState,
          enteredDate: event.target.value,
        };
      });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const expenseItem = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    
    props.onSaveExpenseData(expenseItem);

    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      }
    });
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={userInput.enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2027-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions-container">
          <div className="new-expense__actions">
            <button type="submit">Cancel</button>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
