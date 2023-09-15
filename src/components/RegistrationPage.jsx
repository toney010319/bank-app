import { useState } from "react";
import Input from "./input";

const Registration = (props) => {
    const { setCurrentPage } = props
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts")) || [];
    const [values, setValues] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        lastname: "",
        firstname: "",
        address: "",
        balance: "0.00"
    });
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const Validate = (value) => {
        const selectedAccount = storedAccounts.find((account) => account.username === value.username);
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
            console.log("Successfully registered.");
        }

        setErrors(validationErrors);
    };
    const onLogin = () => {
        setCurrentPage('login')
    }
    return (
        <>
            <h1> Registration Form</h1>
            <form type="submit" onSubmit={onSubmit} >

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    required="required"
                    onChange={onChange}

                />
                {errors.email && <div>{errors.email}</div>}

                <Input
                    label="Username"
                    name="username"
                    type="text"
                    required="required"
                    onChange={onChange}

                />
                {errors.username && <div>{errors.username}</div>}
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    required="required"
                    onChange={onChange}

                />

                <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required="required"
                    onChange={onChange}
                />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                <Input
                    label="Lastname"
                    name="lastname"
                    type="text"
                    required="required"
                    onChange={onChange}
                />
                <Input
                    label="Firstname"
                    name="firstname"
                    type="text"
                    required="required"
                    onChange={onChange}
                />
                <Input
                    label="Address"
                    name="address"
                    type="text"
                    required="required"
                    onChange={onChange}
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={onLogin}>Login</button>
        </>
    );

}


export default Registration;