import { useState } from "react";
import Input from "./Input";
import LoginIcon from "./icon/LoginIcon";
const Registration = (props) => {
  const { setCurrentPage } = props;
  const storedAccounts = JSON.parse(localStorage.getItem("Accounts")) || [];
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    lastname: "",
    firstname: "",
    address: "",
    balance: 0,
    transaction: [],
    budgetTracker: [],
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const Validate = (value) => {
    const selectedAccount = storedAccounts.find(
      (account) => account.username === value.username
    );
    const validationErrors = {};

    if (selectedAccount) {
      validationErrors.username = "Username is already in use.";
    }

    if (selectedAccount && selectedAccount.email === value.email) {
      validationErrors.email = "Email is already in use.";
    }

    if (value.password !== value.confirmPassword) {
      validationErrors.password = "Passwords do not match.";
      validationErrors.confirmPassword = "Passwords do not match.";
    }
    return validationErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validate(values);

    if (Object.keys(validationErrors).length === 0) {
      storedAccounts.push(values);
      localStorage.setItem("Accounts", JSON.stringify(storedAccounts));
      alert("Successfully registered.");
      setCurrentPage("login");
    }

    setErrors(validationErrors);
  };
  const onLogin = () => {
    setCurrentPage("login");
  };

  return (
    <>
      <div className="flex justify-center  items-center  static  ">
        <img
          className=" w-28"
          src="src\assets\avion-logo.png"
          style={{ marginRight: "-25px" }}
        />
        <h1 className="text-red-800 font-extrabold text-5xl flex justify-center  items-center">
          Avion<span className="text-red-300">Bank</span>
        </h1>
      </div>

      <h1 className="font-bold text-2xl text-center">Register to Avion Bank</h1>
      <button
        className=" hover:text-lg absolute top-10 right-10 flex justify-center  text-center items-center text-red-800 font-bold"
        onClick={onLogin}
      >
        Log in
        <LoginIcon className="w-10 h-10 hover:text-lg" />
      </button>
      <form
        className="flex flex-col w-96 m-auto text-center text-lg font-semibold gap-1"
        onSubmit={onSubmit}
      >
        <Input
          className=" py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Email"
          name="email"
          type="email"
          required="required"
          onChange={onChange}
        />
        {errors.email && <div className="text-red-800">{errors.email}</div>}

        <Input
          className="py-1 text-center font-medium  rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Username"
          name="username"
          type="text"
          required="required"
          onChange={onChange}
        />
        {errors.username && (
          <div className="text-red-800">{errors.username}</div>
        )}
        <Input
          className="py-1 text-center font-medium rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Password"
          name="password"
          type="password"
          required="required"
          onChange={onChange}
        />

        <Input
          className="py-1 text-center font-medium rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required="required"
          onChange={onChange}
        />
        {errors.confirmPassword && (
          <div className="text-red-800">{errors.confirmPassword}</div>
        )}
        <Input
          className="py-1 text-center font-medium rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Lastname"
          name="lastname"
          type="text"
          required="required"
          onChange={onChange}
        />
        <Input
          className="py-1 text-center font-medium  rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Firstname"
          name="firstname"
          type="text"
          required="required"
          onChange={onChange}
        />
        <Input
          className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
          label="Address"
          name="address"
          type="text"
          required="required"
          onChange={onChange}
        />
        <button
          className="  mt-6 bg-gradient-to-r from-[#e78372] to-[#c44f3c]  px-16  text-font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8] "
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Registration;
