import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
