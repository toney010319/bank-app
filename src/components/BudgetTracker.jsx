// import { useState } from "react";
// import EditIcon from "./icon/EditIcon";
// import RemoveIcon from "./icon/RemoveIcon";
// import { createPortal } from "react-dom";
// import UpdateListTracker from "./UpdateListBudget";
// import Modal from "./Modal";
 
// const BudgetTracker = (props) => {
//   const { user, setUser, isSetShowAddExpense } = props;
//   const [isShowUpdate, setIsShowUpdate]   = useState(false);

//   const onRemove = (deleteBudgetTracker) => {
//     let newBudgetTracker = user.budgetTracker.filter(
//       (budgetTracker) => budgetTracker !== deleteBudgetTracker
//     );
//     let newAccountDetails = {};
//     const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
//     const updatedAccounts = storedAccounts.map((account) => {
//       if (account.email === user.email) {
//         account.budgetTracker = newBudgetTracker;
//         newAccountDetails = {
//           ...account,
//           budgetTracker: [...(account.budgetTracker || [])],
//         };
//       }
//       return account;
//     });
//     localStorage.setItem("Accounts", JSON.stringify(updatedAccounts));
//     setUser(newAccountDetails);
//   };

  

//   let totalCost = 0;
//   const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
//   storedAccounts.map((account) => {
//     if (account.email === user.email) {
//       let listofCost = user.budgetTracker.map((a) => a.cost);

//       listofCost.forEach((num) => {
//         totalCost += parseFloat(num);
//       });
//     }
//   });
//   const remainingBalance = user.balance - totalCost;

//   const listOfExpenses =
//     user.budgetTracker &&
//     user.budgetTracker.map((budgetTracker, index) => (
//       <div
//         key={index}
//         style={{
//           display: "flex",
//           justifyContent: "space-evenly",
//           textAlign: "right",
//           border: "5px solid #faf0e1",
//           margin: "5px",
//           borderRadius: "20px",
//           fontSize: "20px",
//         }}
//       >
//         <p>{budgetTracker.name}</p>
//         <p>${budgetTracker.cost}</p>
//         <div className=" gap-1 flex items-center justify-center ">
//           <button onClick={() => onRemove(budgetTracker)}>
//             <RemoveIcon className="  text-slate-500  w-7 h-7 hover:text-red-600" />
//           </button>
//           <button onClick={() => setIsShowUpdate(true)}>
//             <EditIcon className="  text-slate-500 w-6 h-6 hover:text-red-600" />
//           </button>
//           {isShowUpdate &&
//             createPortal(
//               <Modal  
//                 user={user}
//                 setUser={setUser}
//                 onClose={() => setIsShowUpdate(false)}
//               >
//                 <UpdateListTracker user={user} setUser={setUser}  />
//               </Modal>,
//               document.getElementById("dashboard")
//             )}
//         </div>
//       </div>
//     ));

//   return (
//     <>
//       <h2 className="self-center text-red-500 text-lg font-bold">
//         Budget Tracker
//       </h2>
//       <div className="flex flex-row justify-evenly">
//         <h3>Expense Name</h3>
//         <h3>Cost</h3>
//         <h3>actions</h3>
//       </div>
//       <div className=" text-end">{listOfExpenses}</div>
//       <div className="flex flex-col justify-center text-center">
//         <p>
//           <b>Balance: </b>${user.balance}
//         </p>
//         <p>
//           <b>Total Cost: </b>${totalCost}
//         </p>
//         <p>
//           <b>Remaining Balance: </b>${remainingBalance}
//         </p>
//       </div>
//       <button
//         className="   mb-5 self-center w-64 mt-6 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-20   font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8] "
//         onClick={() => isSetShowAddExpense(true)}
//       >
//         <p>Add Expense</p>
//       </button>
//     </>
//   );
// };
// export default BudgetTracker;
