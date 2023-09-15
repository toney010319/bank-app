import { useState } from "react"
import Input from "./input"
const LoginPage = (props) => {
    const { setCurrentPage, setLoginAccount } = props
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState({})

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }))
    }


    const Validate = (value) => {

        const Accounts = JSON.parse(localStorage.getItem("Accounts"))
        const selectedAccount = Accounts.find(account => values.username === account.username)

        const validationErrors = {};
        if (!selectedAccount) {
            validationErrors.username = "User does not exist"
        }
        else {
            if (selectedAccount.password !== value.password) {
                validationErrors.password = "Password does not exist";
            } else {
                setLoginAccount(selectedAccount)
                setCurrentPage('dashboard')



            }
        }
        return validationErrors
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const validationErrors = Validate(values);
        setErrors(validationErrors);


    }
    const onRegister = () => {
        setCurrentPage('register')

    }
    return (
        <>
            <h1>Login</h1>
            <form type="submit" onSubmit={onSubmit}>
                <Input
                    label="Username"
                    name="username"
                    type="text"
                    required="required"
                    value={values.username}
                    onChange={onChange}
                />
                {errors.username && <div>{errors.username}</div>}
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    required="required"
                    value={values.password}
                    onChange={onChange}
                />
                {errors.password && <div>{errors.password}</div>}
                <button type="submit">Submit</button>
            </form>
            <button onClick={onRegister} >Create New Account</button>
        </>
    )
}

export default LoginPage