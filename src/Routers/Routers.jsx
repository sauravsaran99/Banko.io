import { Routes, Route } from "react-router"
import { AccountCreate } from "../AccountCreate/AccountCreate"
import { Home } from '../Home/Home'
export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="/createaccount" element={<AccountCreate></AccountCreate>}></Route>
        </Routes>
    )
}