
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
 
  const expenses =[
    {
    id : 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
    location: 'Showroom',
  },
  {
    id: 'e2',
    title: 'Groceries',
    amount: 120.35,
    date: new Date(2023, 2, 30),
    location:'Super Market',
  },
  {
    id: 'e3',
    title: 'Rent',
    amount: 1200.0,
    date: new Date(2023, 3, 1),
    location:'House'
  },
]
  return (
    <div>
        <h2>Let's get started</h2>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
          location={expenses[0].location}
       ></ExpenseItem>
        <ExpenseItem
        title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
          location={expenses[1].location}
       ></ExpenseItem>
        <ExpenseItem 
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
          location={expenses[2].location}
         ></ExpenseItem>
        
        
    </div>
  );
}

export default App;
