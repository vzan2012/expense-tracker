import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");

  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // setUserInput({ ...userInput, enteredTitle: e.target.value });

    // Correct way
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: e.target.value,
    }));
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: e.target.value,
    }));
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    // After form submission clear the fields
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    // Passing data to the onSaveExpenseData
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* <div>{JSON.stringify(userInput)}</div> */}
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
            min="2022-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
