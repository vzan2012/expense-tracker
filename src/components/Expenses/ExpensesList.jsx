import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.key}
          date={expenseItem.date}
          title={expenseItem.title}
          amount={expenseItem.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
