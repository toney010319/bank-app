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
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">Add Expense</h1>
        <p>Expense Name</p>
        <input type="text" name="name" onChange={onChange} required   className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"/>
        <p>Cost</p>
        <input type="number" name="cost" onChange={onChange} required   className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500" />
        <button type="submit" className="m-1 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-5  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8]">Add</button>
      </form>
    </>
  );
};
export default AddExpense;
