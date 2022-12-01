import { React, useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export default function Expenses({ expenses }) {
  const [yearFilter, setYearFilter] = useState('2020');
  const yearFilterChangeHanlder = (filter) => {
    setYearFilter(filter);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });
  return (
    <Card className='expenses'>
      <ExpensesFilter
        yearFilter={yearFilter}
        onFilterChange={yearFilterChangeHanlder}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
