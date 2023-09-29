import { useState } from "react";
import Input from "./Input";
const LoginPage = (props) => {
  const { setCurrentPage, setUser } = props;
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const Validate = (value) => {
    const Accounts = JSON.parse(localStorage.getItem("Accounts"));
    const selectedAccount = Accounts.find(
      (account) => values.username === account.username
    );

    const validationErrors = {};
    if (!selectedAccount) {
      validationErrors.username = "That wasn't correct. Try again?";
    } else {
      if (selectedAccount.password !== value.password) {
        validationErrors.password = "That wasn't correct. Try again?";
      } else {
        setUser(selectedAccount);
        setCurrentPage("dashboard");
      }
    }
    return validationErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validate(values);
    setErrors(validationErrors);
  };
  const onRegister = () => {
    setCurrentPage("register");
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
      <div className="flex justify-center  items-center flex-col">
        <h1 className="font-bold text-2xl">Login to Avion Bank</h1>
        <form
          className="flex justify-center  items-center flex-col "
          type="submit"
          onSubmit={onSubmit}
        >
          {errors.username && (
            <div className="text-red-800">{errors.username}</div>
          )}
          {errors.password && (
            <div className="text-red-800">{errors.password}</div>
          )}
          <Input
            className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md focus:outline-none focus:ring focus:ring-slate-500"
            label="Username"
            name="username"
            type="text"
            required="required"
            value={values.username}
            onChange={onChange}
          />

          <Input
            className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
            label="Password"
            name="password"
            type="password"
            required="required"
            value={values.password}
            onChange={onChange}
          />

          <button
            className=" mt-6 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-20  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8] "
            type="submit"
          >
            Log in
          </button>
        </form>
        <p>
          Don't have an account?
          <button
            className="text-red-800  hover:text-lg font-semibold"
            onClick={onRegister}
          >
            Sign Up
          </button>
        </p>
      </div>
      
    </>
  );
};

export default LoginPage;
