
import '../Home/Home.css';
import '../Home/Account.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const Account = () =>{

    const [bankStatus, setStatus] = useState([]);
    const name = sessionStorage.getItem('name');

    useEffect(() => {
        axios.get('http://localhost:8080/account').then((res) => {
            setStatus(res.data)
        }).catch(err => err.message)
    }, [])


    const id = sessionStorage.getItem('id');
    console.log(id)
    return(
        <div className='account'>
            <div className='adsBox0'><h2>{name}</h2></div>
            <div className='adsBox1' id='adsBox2'>
                <div className='adsBox11 adsBox111'>
                <div>BANK NAME</div>
                <div>ACCOUNT NO.</div>
                <div>STATUS</div>
                </div>
                
                    {bankStatus.map((e) => {
                        if(e.user_id._id === id) {
                            return (<div key={e._id} className='adsBox11'>
                            {e.bank_name === 'SBI'?<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png" alt="sbi" />:null}
                            {e.bank_name === 'PNB'?<img src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-74887573/74887573.jpg" alt="pnb" />:null}
                            {e.bank_name === 'KOTAK'?<img src="https://www.kotak.com/content/dam/Kotak/about-us/kotak-logo-identity.jpg" alt="kotak" />:null}
                            <div>{e._id}</div>
                            {e.status === 'pending'? <div style={{
                                backgroundColor: "#258ed4",
                                padding: "5px",
                                borderRadius: "3px"
                            }}>pending</div>:null}
                            {e.status === 'accepted'? <div style={{
                                backgroundColor: "#e85220",
                                padding: "5px",
                                borderRadius: "3px"
                            }}>accepted</div>:null}
                            {e.status === 'rejected'? <div style={{
                                backgroundColor: "#e31e1e",
                                padding: "5px",
                                borderRadius: "3px"
                            }}>rejected</div>:null}
                            </div>
                        )
                        }
                    })}
            </div>

            
        </div>
    )
}