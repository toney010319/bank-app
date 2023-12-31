import { useState } from "react";
import { createPortal } from "react-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import AddExpense from "./Addexpense";

import LogOutIcon from "./icon/LogOutIcon";
import Modal from "./Modal";
import TableOfBudgetTracker from "./TableOfBudgetTracker";
import PhBankBold from "../assets/PhBankBold";
const Dashboard = (props) => {
  const {
    setCurrentPage,
    user,
    setUser,
    isShowUpdate,
    isSetShowUpdate,
    formValue,
    setFormValue,
  } = props;
  const [isShowAddExpense, isSetShowAddExpense] = useState(false);

  const onLogout = () => {
    setCurrentPage("login");
  };
  return (
    <>
      <div className="flex justify-center  items-center">
        <PhBankBold className=" w-28 h-28  text-red-800" />
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">
          Toney's<span className="text-red-300">Bank</span>
        </h1>
      </div>
      <div className="mt-6 " id="dashboard">
        <div className="flex justify-evenly  ">
          <button
            onClick={onLogout}
            className="hover:text-lg absolute top-10 right-10 flex justify-center  text-center items-center text-red-800 font-bold"
          >
            Logout
            <LogOutIcon className="w-10 h-10 hover:text-lg" />
          </button>
        </div>
        <div className="flex row  justify-center  gap-3">
          <Home user={user} setUser={setUser} setCurrentPage={setCurrentPage} />

          <Navbar accounts={user} user={user} setUser={setUser} />
        </div>
        <div className=" w-7/12 m-auto mt-10 flex flex-col  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg ">
          <TableOfBudgetTracker
            isShowAddExpense={isShowAddExpense}
            isSetShowAddExpense={isSetShowAddExpense}
            user={user}
            isShowUpdate={isShowUpdate}
            isSetShowUpdate={isSetShowUpdate}
            setUser={setUser}
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
