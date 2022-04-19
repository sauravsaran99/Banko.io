
import { Account } from "./Account"
import { Ads } from "./Ads"
import { Card } from './Card'
import { Moneydetails } from "./Moneydetails"
import '../Home/Home.css'
export const Home = () => {

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