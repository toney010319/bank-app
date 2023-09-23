import AddExpense from "./Addexpense";
import "./BudgetTracker.css";
const BudgetTracker = (props) => {
  const { user, setSwitchPage } = props;

  const onRemove = () => {
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
    const updatedAccounts = storedAccounts.map((account) => {
      if (account.email === user.email) {
        console.log(user.budgetTracker);
        console.log("listOfExpenses", listOfExpenses);
      }
    });
  };
  const onEdit = () => {
    console.log("edit");
  };
  const listOfExpenses =
    user.budgetTracker &&
    user.budgetTracker.map((budgetTracker, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid",
          margin: "2px",
        }}
      >
        <p style={{ width: "180.417px" }}>{budgetTracker.name}</p>
        <p>{budgetTracker.cost}</p>
        <div>
          <button onClick={onRemove}>X</button>
          <button onClick={onEdit}>E</button>
        </div>
      </div>
    ));
  const onAddExpense = () => {
    setSwitchPage("AddExpense");
  };

  return (
    <>
      <h2>Budget Tracker</h2>
      <div>
        <h3>Expense Name</h3>
        <h3>Cost</h3>
        <h3>actions</h3>
      </div>
      <div>{listOfExpenses}</div>

      <button onClick={onAddExpense}>Add Expense</button>
    </>
  );
};
export default BudgetTracker;
