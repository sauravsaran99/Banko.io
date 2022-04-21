
import '../Auth/Login.css';
import { useDispatch } from 'react-redux'
import { navbarValue } from '../Redux/Action/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';
export const Login = () => {
    const navigate = useNavigate();
    

    const [getForm, setForm] = useState({
        email: '',
        password: ''
    })
    const [wPas, alertP] = useState(false)

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(navbarValue(false));
    }, [dispatch])

    const token = sessionStorage.getItem("token");

if(token) {
    return <Navigate to='/'></Navigate>
}


const submitForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...getForm, [name]: value})
}

const configForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', getForm).then((res) => {
        console.log(getForm)
        console.log(res.data)
        if(res.data.token) {
            navigate('/');
            dispatch(navbarValue(true));
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("id", res.data.id);
        }
        if(res.data === 'Either email or password is incorrect') {
            alertP(true)
        }
    }).catch(err => console.log(err.message))

    setForm({
        email: '',
    password: ''
    })
}

const inputTarget = (e) => {
    alertP(false)
}
    return(
        <>
        <div className='loginMain'>
            <div className='formLogin'>
                <form className='loginForm' onSubmit={configForm}>
                <h1>Banko.io</h1>
                    <div>
                        <h3>Email</h3>
                        <input value={getForm.email} type="email" name="email" onClick={inputTarget} onChange={submitForm}/>
                        <h3>Password</h3>
                        <input onClick={inputTarget} value={getForm.password} type="password" name="password" onChange={submitForm}/>
                        {wPas? <p className='passErr'>Either user id or password is incorrect</p>:''}
                    </div>
                    <button>Login</button>
                </form>
            </div>
            <div className='loginAd'>
        {/* <img src={"/bnk.jpg"} alt="bnk"/> */}
            </div>
        </div>
        
        </>
    )
}