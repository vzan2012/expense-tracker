import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const showFormExpenseHandler = () => {
    setFormVisible(true);
  };

  const cancelHandler = () => {
    setFormVisible(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Passing data to the Parent Component
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button className="mb-5" onClick={showFormExpenseHandler}>
          Add New Expense
        </button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
