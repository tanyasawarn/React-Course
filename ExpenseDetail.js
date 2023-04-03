import ExpenseItem from "./ExpenseItem";
function ExpenseDetail(props){
   const title =props.title;
   const amount=props.amount;
   const location=props.location;

   return(
    <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs.{amount}</div>
        <div className="expense-item__location">{location}</div>
      </div>
   );
}

export default ExpenseDetail;