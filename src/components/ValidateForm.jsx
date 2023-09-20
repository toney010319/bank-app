// const Validate = (props) => {
//     const [value] = props
//     const Accounts = JSON.parse(localStorage.getItem("Accounts"))
//     const selectedAccount = Accounts.find(account => values.username === account.username)
//     const validationErrors = {};
//     if (!selectedAccount) {
//         validationErrors.username = "User does not exist"

//     }
//     else {
//         if (selectedAccount.password !== value.password) {
//             validationErrors.password = "Password does not exist";
//         } else {
//             console.log("redirect to dashboard");
//         }
//     }
//     return validationErrors

// }
// export default Validate