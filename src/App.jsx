
import './App.css'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'




function App() {

  let Accounts = [{
    email: "test1@gmail.com",
    username: "test1",
    password: "test1",
    confirmPassword: "test1",
    lastname: "test",
    firstname: "one",
    address: "test one cebu"
  }, {
    email: "test2@gmail.com",
    username: "test2",
    password: "test2",
    confirmPassword: "test2",
    lastname: "test",
    firstname: "two",
    address: "test one cebu"
  }]
  localStorage.setItem("Accounts", JSON.stringify(Accounts))
  return (
    <>
      {/* <LoginPage /> */}
      <RegistrationPage />
      <br />

    </>
  )
}

export default App
