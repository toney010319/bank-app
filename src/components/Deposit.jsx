const Deposit = () => {

    return (
        <>
            <form>
                <h1>Deposit</h1>
                <label>Enter Amount</label>
                <input type="text" placeholder="$0.00"></input>
                <label>Enter username</label>
                <input type="text" placeholder="Username"></input>
                <label>Enter Account number</label>
                <input type="text"></input>
                <button type="submit">Send</button>
            </form>
        </>
    )
}
export default Deposit