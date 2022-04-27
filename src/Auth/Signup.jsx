
import '../Auth/Signup.css'
import { useDispatch } from 'react-redux'
import { navbarValue } from '../Redux/Action/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';
export const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(navbarValue(false));
    }, [dispatch])
const [getForm, setForm] = useState({
    account: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
})

const [passErr, setPassErr] = useState(false);
const [already, setUser] = useState(false)
const submitForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...getForm, [name]: value})
}

// console.log(getForm)
const configForm = (e) => {
    e.preventDefault();
    console.log(getForm)
    axios.post('http://localhost:8080/register', getForm).then((res) => {
        console.log(res.data._id)

        if(res.data._id) {
            navigate('/login')
        }
        if(res.data === 'User already exists') {
            setUser(true)
        }
        if(res.data.errors[0].msg === 'Password is not strong') {
            setPassErr(true)
        }
    }).catch(err => console.log(err.message))
    setForm({
        account: '',
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
}

const token = sessionStorage.getItem("token");
    
if(token) {
    return <Navigate to='/'></Navigate>
}

const inputTarget = (e) => {
    setPassErr(false);
    setUser(false)
}
    return (
        <>
          <div className='loginMain'>
            <div className='formLogin'>
                <form className='loginForm' onSubmit={configForm}>
                    <div>
                    <h1>Banko.io</h1>
                    <h3>Account Types</h3>
                    <select value={getForm.account} name='account' onChange={submitForm} >
                        <option value="">Select type</option>
                        <option value="users">user</option>
                        <option value="admin">admin</option>
                    </select>
                    <h3>First Name</h3>
                    <input onClick={inputTarget} type="text" name="first_name" onChange={submitForm} value={getForm.first_name} required/>
                    <h3>Last Name</h3>
                    <input onClick={inputTarget} type="text" name="last_name" onChange={submitForm} value={getForm.last_name} required/>
                        <h3>Email</h3>
                        <input onClick={inputTarget} value={getForm.email} type="email" name="email" onChange={submitForm}/>
                        {already? <p className='passErr'>Email already exist</p>:''}
                        <h3>Password</h3>
                        <input onClick={inputTarget} value={getForm.password} type="password" name="password" onChange={submitForm}/>
                        {passErr?<p className='passErr'>Password is not strong</p>:''}
                    </div>
                    <button>Signup</button>
                </form>
            </div>
            <div className='loginAd'>
        {/* <img src={"/bnk.jpg"} alt="bnk"/> */}
            </div>
        </div>
        </>
    )
}