import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import { useEffect, useState } from "react";

function App() {
  let Accounts = [
    {
      email: "test1@gmail.com",
      username: "test1",
      password: "test1",
      confirmPassword: "test1",
      lastname: "test",
      firstname: "one",
      address: "test one cebu",
      balance: 0,
      accountnumber: "654321",
      // pin: "123456",
      transaction: [],
      budgetTracker: [],
    },
    {
      email: "test2@gmail.com",
      username: "test2",
      password: "test2",
      confirmPassword: "test2",
      lastname: "test",
      firstname: "two",
      address: "test one cebu",
      balance: 0,
      accountnumber: "123456",
      // pin: "123456",
      transaction: [],
      budgetTracker: [],
    },
  ];

  const [currentPage, setCurrentPage] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("Accounts")) {
      localStorage.setItem("Accounts", JSON.stringify(Accounts));
    }
  }, []);
  return (
    <>
      {currentPage === "login" && (
        <LoginPage setCurrentPage={setCurrentPage} setUser={setUser} />
      )}
      {currentPage === "register" && (
        <RegistrationPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "dashboard" && (
        <Dashboard
          setCurrentPage={setCurrentPage}
          setUser={setUser}
          user={user}
        />
      )}

      <br />
    </>
  );
}

export default App;
