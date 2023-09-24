import { useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Send from "./Send";
import Home from "./Home";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AddExpense from "./Addexpense";
import BudgetTracker from "./BudgetTracker";
import TransactionHistory from "./TransactionHistory";
import HomeIcon from "./icon/HomeIcon";
import LogOutIcon from "./icon/LogOutIcon";
const Dashboard = (props) => {
  const { setCurrentPage, user, setUser } = props;
  const [switchPage, setSwitchPage] = useState("home");

  // const onLogout = () => {
  //     setCurrentPage('login')
  // }
  const onHome = () => {
    setSwitchPage("home");
  };
  const onLogout = () => {
    setCurrentPage("login");
  };
  return (
    <>
      {/* <nav>
                    <a href="/">Home</a>
                    <ul>
                        <li><a href="/">Send</a></li>
                        <li><a href="/">Deposite</a></li>
                        <li><a href="/">Withdraw</a></li>
                    </ul>
                    <button onClick={onLogout}>Logout</button>
                </nav> */}
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
      <div className="mt-6">
        <div className="flex justify-evenly ">
          <button onClick={onHome}>
            <HomeIcon className="w-10 h-10 text-slate-900   shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg hover:text-red-500 mb-5  " />
          </button>
          <button onClick={onLogout}>
            <LogOutIcon className="w-9 h-9 text-slate-900   shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg hover:text-red-500 mb-5" />
          </button>
        </div>
        <div className="flex row  justify-center  gap-3">
          {switchPage === "home" && (
            <Home
              setSwitchPage={setSwitchPage}
              user={user}
              setUser={setUser}
              setCurrentPage={setCurrentPage}
            />
          )}
          <Navbar
            setSwitchPage={setSwitchPage}
            setCurrentPage={setCurrentPage}
            accounts={user}
          />
        </div>
        <div className=" w-7/12 m-auto mt-10 flex flex-col  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg ">
          <BudgetTracker
            user={user}
            setSwitchPage={setSwitchPage}
            setUser={setUser}
          />
        </div>
      </div>
      {switchPage === "Send" && <Send user={user} setUser={setUser} />}
      {switchPage === "Deposit" && <Deposit user={user} setUser={setUser} />}
      {switchPage === "Withdraw" && <Withdraw user={user} setUser={setUser} />}
      {switchPage === "History" && (
        <TransactionHistory user={user} setUser={setUser} />
      )}
      {switchPage === "AddExpense" && (
        <AddExpense user={user} setUser={setUser} />
      )}
    </>
  );
};
export default Dashboard;
