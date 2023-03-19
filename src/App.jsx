import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "Buy Car",
      amount: 20000,
      date: new Date(2023, 1, 26),
    },
    {
      id: 2,
      title: "Buy Cycle",
      amount: 10000,
      date: new Date(2023, 2, 31),
    },
    {
      id: 3,
      title: "Buy Cycle - 2",
      amount: 10000,
      date: new Date(2023, 2, 31),
    },
  ];

  // Use State
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(`App.jsx`);
    console.log(expense);
    // setExpenses([expense, ...expenses]);

    setExpenses((prevExpense) => [expense, ...prevExpense]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
