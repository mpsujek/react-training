import { React, useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
