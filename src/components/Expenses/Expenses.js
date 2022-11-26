import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
