
const Home = (props) => {
    const { accounts, setSwitchPage, loginAccout } = props

    return (

        <>
            <h1>Home</h1>
            <div>
                <p>Firstname: <b>{accounts.firstname}</b>  </p>
                <p>LASTNAME: <b>{accounts.lastname}</b></p>
                <p>EMAIL:<b>{accounts.email}</b></p>
            </div>
            <div>
                <p>Balance:<b>{accounts.balance}</b> </p>
                <p>transaction history</p>
            </div>

            <div>
                <p>expense name</p>
                <p>cost</p>
                <p>action</p>
            </div>
            <button>add expenses</button>

        </>
    )
}
export default Home

