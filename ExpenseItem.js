import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail amount={props.amount}  location={props.location}   title={props.title} />
    </div>
  );
}

export default ExpenseItem;