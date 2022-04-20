import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
  
   const[enterTitle, setEnterTitle] = useState('');
   const[enterAmount, setEnterAmount] = useState('');
   const[enterDate, setEnterDate]  = useState('');

  const titleChangehandler = (event) =>{
     setEnterTitle(event.target.value);
  };

  const amountChangehandler = (event) =>{
    setEnterAmount(event.target.value);
  };

  const dateChangehandler = (event) =>{
   setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
   
    const expenseData = {
     title : enterTitle,
     Amount : +enterAmount,
     date : new Date(enterDate)
   };

  props.onSaveExpenseData(expenseData);
   setEnterTitle('');
   setEnterAmount('');
   setEnterDate('');
  };
  return <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
          <div className="new-expense__control">
           <label>{enterTitle}</label>
           <input type='text' value={enterTitle} onChange={titleChangehandler} />
          </div>
          <div className="new-expense__control">
           <label>{enterAmount}</label>
           <input type='number' min='0.01' step ='0.01' value={enterAmount} onChange={amountChangehandler} />
          </div>
          <div className="new-expense__control">
           <label>{enterDate}</label>
           <input type='date' min='2021-01-01' step ='2023-12-31' value={enterDate} onChange={dateChangehandler} />
          </div>
       </div>
       <div className="new-expense__actions">
           <button type="button" onClick={props.onCancel}>Cancel</button>
           <button type="submit">Add Expense</button>
       </div>
  </form>
       
};

export default ExpenseForm;
