
import './App.css'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Send from './components/Send'




function App() {


  let Accounts = [{
    email: "test1@gmail.com",
    username: "test1",
    password: "test1",
    confirmPassword: "test1",
    lastname: "test",
    firstname: "one",
    address: "test one cebu",
    balance: "100.00"
  }, {
    email: "test2@gmail.com",
    username: "test2",
    password: "test2",
    confirmPassword: "test2",
    lastname: "test",
    firstname: "two",
    address: "test one cebu",
    balance: "100.00"
  }]

  const [currentPage, setCurrentPage] = useState('login')
  const [loginAccout, setLoginAccount] = useState(null)
  useEffect(() => {
    if (!localStorage.getItem("Accounts")) {
      localStorage.setItem("Accounts", JSON.stringify(Accounts))
    }
  }, [])
  return (
    <>
      {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} setLoginAccount={setLoginAccount} />}
      {currentPage === 'register' && <RegistrationPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} user={loginAccout} />}


      <br />

    </>
  )
}

export default App
