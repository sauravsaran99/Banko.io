
import '../AccountCreate/AccountCreate.css'
import { useState } from 'react';
import axios from 'axios';
export const AccountCreate = () => {

    const [formData, setForm] = useState({
        status: 'pending',
        bank_name: '',
        first_name: '',
        email: '',
        last_name: '',
        addressPermanent: '',
        statePerm: '',
        zipPerm: '',
        addressCurrent: '',
        stateCurr: '',
        zipCurr: '',
        user_id: sessionStorage.getItem("id"),
        money: ''
    });

    const updateForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...formData, [name]: value})
        // console.log(formData)
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:8080/account', formData).then((res) => {
            console.log(res.data)
        }).catch(err => console.log(err.message))
        setForm({
        status: 'pending',
        bank_name: '',
        first_name: '',
        email: '',
        last_name: '',
        addressPermanent: '',
        statePerm: '',
        zipPerm: '',
        addressCurrent: '',
        stateCurr: '',
        zipCurr: '',
        user_id: sessionStorage.getItem("id"),
        money: ''
        })
    }
    return (
        <div className="accountCreate">
            <div className="forNav"></div>
            <div className="bankForm">
                <form onSubmit={sendData}>
                    <div>
                        <h3>Select Bank</h3>
                        <select value={formData.bank_name} name='bank_name' onChange={updateForm} required>
                            <option value=''>Choose Bank</option>
                            <option value="SBI">SBI</option>
                            <option value="PNB">PNB</option>
                            <option value="KOTAK">KOTAK</option>
                        </select>
                    </div>
                    <h3>Full Name</h3>
                    <div className='fansl'> 
                        <span id='first_name'>
                        <input type="text" name="first_name" onChange={updateForm} value={formData.first_name} required/>
                        <br />
                        <label>First Name</label>
                        </span>
                        
                        <span id='last_name'>
                        <input value={formData.last_name} type="text" name="last_name" onChange={updateForm} required/>
                        <br />
                        <label>Last Name</label>
                        </span>
                        
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="email" name="email" value={formData.email} onChange={updateForm}/>
                    </div>
                    <div>
                        <h3>Permanent Address *</h3>
                        <input value={formData.addressPermanent} type="text" name="addressPermanent" id="address" onChange={updateForm} required/>
                        <label>
Street Address</label>
<br/>
<div className='fansl'> 
                        <span id='first_name'>
                        <input value={formData.statePerm} type="text" name="statePerm" onChange={updateForm} required/>
                        <br />
                        <label>State / Province</label>
                        </span>
                        
                        <span id='last_name'>
                        <input type="text" name="zipPerm" value={formData.zipPerm} onChange={updateForm} required/>
                        <br />
                        <label>Postal / Zip Code</label>
                        </span>
                        
                    </div>
                    </div>
                    <div>
                        <h3>Current Address</h3>
                        <input value={formData.addressCurrent} type="text" name="addressCurrent" id="address" onChange={updateForm} required/>
                        <label>
Street Address</label>
<br/>
<div className='fansl'> 
                        <span id='first_name'>
                        <input value={formData.stateCurr} type="text" name="stateCurr" onChange={updateForm} required/>
                        <br />
                        <label>State / Province</label>
                        </span>
                        
                        <span id='last_name'>
                        <input value={formData.zipCurr} type="text" name="zipCurr" onChange={updateForm} required/>
                        <br />
                        <label>Postal / Zip Code</label>
                        </span>
                        
                    </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}