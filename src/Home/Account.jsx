
import '../Home/Home.css';
import '../Home/Account.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const Account = () =>{

    const [bankStatus, setStatus] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/account').then((res) => {
            setStatus(res.data)
        }).catch(err => err.message)
    }, [])
    console.log(bankStatus)
    return(
        <div className='account'>
            <div className='adsBox0'><h2>Banko.io</h2></div>
            <div className='adsBox1'>
                <h1>Get Ready For the Banko.io</h1>
            </div>
        </div>
    )
}