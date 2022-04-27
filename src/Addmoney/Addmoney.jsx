
import { useState } from "react"
import axios from "axios"

export const AddMoney = () => {

    const [data, setData] = useState({
        accnumber: '',
        money: ''
    })

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({...data, [name]: value})
    }

    console.log(data)

    const modify = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8080/account/${data.accnumber}`, {money:data.money}).then((res) => {
            console.log(res.data)
        }).catch(err => console.log('mess:',err.message));
    }
    return (
        <form onSubmit={modify}>
            <label>Enter account Number</label>
            <input value={data.accnumber} onChange={getData} type="text" name="accnumber" id="accnumber" />
            <label>Amount</label>
            <input value={data.money} onChange={getData} type="number" name="money" id="money" />
            <button>Send</button>
        </form>
    )
}