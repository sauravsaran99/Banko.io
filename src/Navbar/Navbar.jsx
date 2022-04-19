
import { Link } from "react-router-dom"
import '../Home/Home.css';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faBank } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
    return (
        <div className='nav'>
                
                <ul>
                    <li><FontAwesomeIcon icon={faHouse} /></li>
                    <li><FontAwesomeIcon icon={faMoneyBill} /></li>
                    <li><FontAwesomeIcon icon={faBook} /></li>
                    <li><FontAwesomeIcon icon={faPassport} /></li>
                    <li><FontAwesomeIcon icon={faBank} /></li>
                    <li><FontAwesomeIcon icon={faCreditCard} /></li>
                </ul>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'> Prices</Link></li>
            <li><Link to='/createaccount'>Create acc.</Link></li>
            <li><Link to='/'>Transfers</Link></li>
            <li><Link to='/login'>Bank</Link></li>
            <li><Link to='/signup'>Create</Link></li>
            </ul>
            </div>
    )
}