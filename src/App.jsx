import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;