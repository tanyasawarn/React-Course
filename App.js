
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
const expenseItem=[];
for(let i=0;i<expenses.length;i++)
{
    expenseItem.push(
      <ExpenseItem
    key={expenses[i].id}
    title={expenses[i].title}
    amount={expenses[i].amount}
    date={expenses[i].date}
    location={expenses[i].location}
   />
    );
}
  return (
    <div>
        <h2>Let's get started</h2>
       {expenseItem}
    </div>
  );
}

export default App;
