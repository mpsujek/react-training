import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
export default function Expenses({ expenses }) {


  const expensesFilterChangeHandler = (filter) => {
    console.log(filter, 'Expenses.js');
  };
  return (
    <Card className='expenses'>
      <ExpensesFilter filterValue={expensesFilterChangeHandler} />
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
