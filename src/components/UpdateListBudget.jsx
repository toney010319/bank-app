import { useState } from "react";
const UpdateListTracker = (props) => {
  const { user, setUser } = props;
  const [formValue, setFormValue] = useState({ name: "", cost: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onEdit = (e,editBudgetTracker) => {
    e.preventDefault()
    let newBudgetTracker = user.budgetTracker.filter(
      (budgetTracker) => budgetTracker === editBudgetTracker
    
    );
    console.log("newBudgetTracker", newBudgetTracker);
    console.log(budgetTracker)
  };
  
  
 
  return (
    <>
      <form className="flex flex-col gap-4 text-center ">
        <h1 className="text-red-800 font-extrabold   text-xl flex justify-center  items-center">
          Update Expense
        </h1>
        <p>Expense Name</p>
        <input
          label="Expense Name"
          type="text"
          name="name"
          required
          onChange={onChange}
          className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
        ></input>
        <p>Cost</p>
        <input
          label=" Cost"
          type="number"
          name="cost"
          required
          onChange={onChange}
          className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
        ></input>
        <button
          onClick={() => {
            onEdit(budgetTracker)
         
          }}
          className="m-1 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-5  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8]"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateListTracker;
