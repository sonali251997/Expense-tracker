import React,{useState} from 'react';

import InputExpense from './components/NewExpense/InputExpense';
import NewExpense from "./components/Expenses/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1',
    title: 'Toilet Paper', 
    amount: 294.67, 
    date: new Date(2021, 2, 28),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12),
  },
  { id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
   },
  { id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2021, 5, 12),
   },
];


const App = () => {
  const[expenses, setexpenses] = useState(DUMMY_EXPENSES);
   
  const addExpenseHandler = (expense) =>{
   setexpenses(prevExpenses => {
     return[expense, ...prevExpenses];
   });
  };

  return (
    <div>
      <InputExpense onAddExpense ={addExpenseHandler} />
      <NewExpense items = {expenses} />
    </div>
  );
}

export default App;