
const Home = (props) => {
    const { user } = props

    return (

        <>
            <h1>Home</h1>
            <div>
                <p>Firstname: <b>{user.firstname}</b>  </p>
                <p>LASTNAME: <b>{user.lastname}</b></p>
                <p>EMAIL:<b>{user.email}</b></p>
            </div>
            <div>
                <p>Balance:<b>{user.balance}</b> </p>
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

