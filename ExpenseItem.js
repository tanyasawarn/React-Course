import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2023,2,23);
    const expenseTitle ='Car Insurance';
    const expenseAmount= 294.67;
    const locationofexpenditure ='Mall';
    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">Rs.{expenseAmount}</div>
            <div className="expense-item__location">{locationofexpenditure}</div>
        </div>
         </div>)

}
export default ExpenseItem;