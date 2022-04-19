
import '../Auth/Signup.css'
import { useDispatch } from 'react-redux'
import { navbarValue } from '../Redux/Action/Nav';
import { useEffect } from 'react';

export const Signup = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(navbarValue(false));
    }, [])
    return (
        <>
        <div>Signup</div>
        </>
    )
}