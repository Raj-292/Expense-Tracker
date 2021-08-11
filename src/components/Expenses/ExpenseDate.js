import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // hr : Human Readable
  const hrDay = props.date.toLocaleString("en-us", { day: "2-digit" });
  const hrMonth = props.date.toLocaleString("en-us", { month: "long" });
  const hrYear = props.date.toLocaleString("en-us", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{hrDay}</div>
      <div className="expense-date__month">{hrMonth}</div>
      <div className="expense-date__year">{hrYear}</div>
    </div>
  );
};

export default ExpenseDate;
