import { useState } from "react";
import { createPortal } from "react-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AddExpense from "./Addexpense";
import BudgetTracker from "./BudgetTracker";
import LogOutIcon from "./icon/LogOutIcon";
import Modal from "./Modal";
const Dashboard = (props) => {
  const { setCurrentPage, user, setUser,isShowUpdate, isSetShowUpdate } = props;
  const [isShowAddExpense, isSetShowAddExpense] = useState(false);

  const onLogout = () => {
    setCurrentPage("login");
  };
  return (
    <>
      <div className="flex justify-center  items-center">
        <img
          className="w-32"
          src="src\assets\avion-logo.png"
          style={{ marginRight: "-25px" }}
        />
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">
          Avion<span className="text-red-300">Bank</span>
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
          <BudgetTracker
            isShowAddExpense={isShowAddExpense}
            isSetShowAddExpense={isSetShowAddExpense}
            user={user}
            isShowUpdate={isShowUpdate}
            isSetShowUpdate={isSetShowUpdate}
            setUser={setUser}
          />
        </div>
        {isShowAddExpense &&
          createPortal(
            <Modal
              user={user}
              setUser={setUser}
              onClose={() => isSetShowAddExpense(false)}
            >
              <AddExpense user={user} setUser={setUser} />
            </Modal>,
            document.getElementById("dashboard")
          )}
      </div>
    </>
  );
};
export default Dashboard;
