import Input from "./input"
const LoginPage = () => {



    return (
        <>
            <h1>Login</h1>
            <form>
                <Input
                    label="Email"
                    type="email"
                />
                <Input
                    label="Password"
                    type="pasword"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginPage