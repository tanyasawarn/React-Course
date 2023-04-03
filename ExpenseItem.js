import './ExpenseItem.css';

function ExpenseItem(props){
    const expenseDate = new Date(2023,2,23);
    const expenseTitle ='Car Insurance';
    const expenseAmount= 294.67;
    const locationofexpenditure ='Mall';
    return (
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs.{props.amount}</div>
            <div className="expense-item__location">{props.location}</div>
        </div>
         </div>)

}
export default ExpenseItem;