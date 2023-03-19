import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filter Expenses By Year
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.key}
          date={expenseItem.date}
          title={expenseItem.title}
          amount={expenseItem.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
