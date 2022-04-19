
import '../Auth/Signup.css'
import { useDispatch } from 'react-redux'
import { navbarValue } from '../Redux/Action/Nav';
import { useEffect, useState } from 'react';

export const Signup = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(navbarValue(false));
    }, [])
const [getForm, setForm] = useState({
    email: '',
    password: ''
})

const submitForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...getForm, [name]: value})
}

const configForm = (e) => {
    e.preventDefault();
    console.log(getForm)
    setForm({
        email: '',
    password: ''
    })
}
    return (
        <>
          <div className='loginMain'>
            <div className='formLogin'>
                <form className='loginForm' onSubmit={configForm}>
                    <div>
                    <h1>Banko.io</h1>
                        <h3>Email</h3>
                        <input value={setForm.email} type="email" name="email" onChange={submitForm}/>
                        <h3>Password</h3>
                        <input value={setForm.password} type="password" name="password" onChange={submitForm}/>
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