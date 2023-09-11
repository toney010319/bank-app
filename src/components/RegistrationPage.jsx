import Input from "./input";
const Registration = () => {
    let UserDB = []
    function submitHandler(event) {
        event.preventDefault()

        let userDBfromStorage = JSON.parse(localStorage.getItem("User"))
        let formData = new FormData(event.target)
        let formDataObject = Object.fromEntries(formData)
        const emails = []
        const userNames = []
        if (userDBfromStorage !== null) {
            for (let i = 0; i < userDBfromStorage.length; i++) {
                emails.push(userDBfromStorage[i].email)
            }
            if (emails.includes(formData.get("email"))) {
                console.log("email already in use")
                return;
            }
            else {
                console.log("email is valid")
            }
            for (let i = 0; i < userDBfromStorage.length; i++) {
                userNames.push(userDBfromStorage[i].Username)
            }
            if (userNames.includes(formData.get("Username"))) {
                console.log("Username already in use")
                return;
            }
            else {
                console.log("Username is valid")
            }


        }
        UserDB.push(formDataObject)
        localStorage.setItem("User", JSON.stringify(UserDB))
    }
    return (
        <>
            <h1> Registration Form</h1>
            <form type="submit" onSubmit={submitHandler} >
                <Input
                    label="Username"
                    type="text"
                    required
                />
                <Input
                    label="email"
                    type="email"
                    required
                />
                <Input
                    label="password"
                    type="password"
                    required
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    required
                />
                <Input
                    label="Lastname"
                    type="text"
                    required
                />
                <Input
                    label="Firstname"
                    type="text"
                    required
                />
                <Input
                    label="address"
                    type="text"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );

}

export default Registration;