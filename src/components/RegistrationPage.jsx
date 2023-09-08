const RegistrationPage = () => {
    let UserDB = []
    function submitHandler(event) {
        event.preventDefault()
        let userDBfromStorage = JSON.parse(localStorage.getItem("User"))
        let formData = new FormData(event.target)


        let formDataObject = Object.fromEntries(formData)
        UserDB.push(formDataObject)
        localStorage.setItem("User", JSON.stringify(UserDB))
    }
    return (
        <>
            <h1> Registration Form</h1>
            <form type="submit" className="registration-form">
                <label for="email" className="input-text" >Email</label>
                <input name="email" type="email" />
                <label for="password" className="input-text" >Password</label>
                <input name="password" type="password" />
                <label for="confirmPassword" className="input-text">Confirm Password</label>
                <input name="confirmPassword" type="password" />
                <label for="lastName" className="input-text">Lastname</label>
                <input name="lastName" type="text" />
                <label for="firstName" className="input-text" >Firstname</label>
                <input name="firstName" type="text" />
                <label for="address" className="input-text">Address</label>
                <input name="address" type="text" />
                <button type="submit" className="submit">Submit</button>
            </form>
        </>
    );
}

export default RegistrationPage;