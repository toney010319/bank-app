import { useState } from 'react'
import './Dashboard.css'
import Navbar from './Navbar'
import Send from './Send'
import Home from './Home'
import Deposit from './Deposit'
import Withdraw from './Withdraw'

const Dashboard = (props) => {
    const { setCurrentPage, user, setLoginAccount } = props
    const [switchPage, setSwitchPage] = useState('home')

    // const onLogout = () => {
    //     setCurrentPage('login')
    // }
    return (
        <>

            <div>
                {/* <nav>
                    <a href="/">Home</a>
                    <ul>
                        <li><a href="/">Send</a></li>
                        <li><a href="/">Deposite</a></li>
                        <li><a href="/">Withdraw</a></li>
                    </ul>
                    <button onClick={onLogout}>Logout</button>
                </nav> */}
                <Navbar setSwitchPage={setSwitchPage} setCurrentPage={setCurrentPage} accounts={user} />
            </div>
            {switchPage === 'home' && <Home setSwitchPage={setSwitchPage} user={user} />}
            {switchPage === 'Send' && <Send user={user} setLoginAccount={setLoginAccount} />}
            {switchPage === 'Deposit' && <Deposit user={user} setLoginAccount={setLoginAccount} />}
            {switchPage === 'Withdraw' && <Withdraw user={user} setLoginAccount={setLoginAccount} />}
        </>
    )


}
export default Dashboard