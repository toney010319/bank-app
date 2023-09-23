import { useState } from "react";
const AddExpense = (props) => {
  const { user, setUser } = props;
  const [formValue, setFormValue] = useState({ name: "", cost: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newAccountDetails = {};
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
    const updatedAccounts = storedAccounts.map((account) => {
      if (account.email === user.email) {
        const newExpense = {
          name: `${formValue.name}`,
          cost: `${formValue.cost}`,
        };
        account.budgetTracker.push(newExpense);
        // user.budgetTracker = account.budgetTracker
        newAccountDetails = {
          ...account,
          budgetTracker: [...(account.budgetTracker || [])],
        };
      }

      return account;
    });

    localStorage.setItem("Accounts", JSON.stringify(updatedAccounts));
    setUser(newAccountDetails);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Add Expense</h1>
        <p>Expense Name</p>
        <input type="text" name="name" onChange={onChange} required />
        <p>Cost</p>
        <input type="number" name="cost" onChange={onChange} required />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default AddExpense;
