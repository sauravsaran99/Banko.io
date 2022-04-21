
import { Account } from "./Account"
import { Ads } from "./Ads"
import { Card } from './Card'
import { Moneydetails } from "./Moneydetails"
import '../Home/Home.css';
import { Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { navbarValue } from '../Redux/Action/Nav';
import { useEffect } from "react";
export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(navbarValue(true));
    }, [dispatch])
    const token = sessionStorage.getItem("token");

    if(!token) {
        return <Navigate to='/login'></Navigate>
    }
        return (
            <div className="mainHome">
            <div className="firstBox">
                <div className="space"></div>
            <Ads></Ads>
            <Account></Account>
            </div>
            <div className="secondBox">
            <Card></Card>
            <Moneydetails></Moneydetails>
            </div>
            </div>
        )
}