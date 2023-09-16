const Send = (props) => {
    const { accounts } = props
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts"))
    
    return (
        <>
            <form>
                <h1>Send</h1>
                <label>Enter Amount</label>
                <input type="text" placeholder="$0.00"></input>
                <label>Enter username</label>
                <input type="text" placeholder="Username"></input>
                
                <button type="submit">Send</button>
            </form>
        </>
    )
}
export default Send