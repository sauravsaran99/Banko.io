import { Routes, Route } from "react-router"
import { AccountCreate } from "../AccountCreate/AccountCreate"
import { AddMoney } from "../Addmoney/Addmoney"
import { Login } from "../Auth/Login"
import { Signup } from "../Auth/Signup"
import { Home } from '../Home/Home'
export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="/createaccount" element={<AccountCreate></AccountCreate>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/addmoney" element={<AddMoney></AddMoney>}></Route>
        </Routes>
    )
}