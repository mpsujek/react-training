import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
  };
  const showExpenseFormHandler = () => {
    setIsFormVisible(true);
  };

  const closeHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='new-expense'>
      {!isFormVisible ? (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHanlder}
          hideForm={closeHandler}
        />
      )}
    </div>
  );
}
