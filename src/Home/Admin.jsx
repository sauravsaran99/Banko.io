
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Home/Admin.css'

export const Admin = () => {
    const [data, getData] = useState([]);
    const patchData = {
        status: 'accepted'
    }
    useEffect(() => {
        axios.get('http://localhost:8080/account').then((req) => {
            // console.log(req.data);
            getData(req.data)
        }).catch(err => console.log('mess:',err.message));
    }, [])

    const updateData = (id) => {
        axios.patch(`http://localhost:8080/account/${id}`, patchData).then((res) => {
            axios.get('http://localhost:8080/account').then((req) => {
            // console.log(req.data);
            getData(req.data)
        }).catch(err => console.log('mess:',err.message));
        }).catch(err => console.log('mess:',err.message));
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/account/${id}`).then((res) => {
            axios.get('http://localhost:8080/account').then((req) => {
            // console.log(req.data);
            getData(req.data)
        }).catch(err => console.log('mess:',err.message));
        }).catch(err => console.log('mess:',err.message));
    }

    return (
        <>
            {data.map((e) => {
                return <div className='adminAccount' key={e._id}>
                    {e.status === 'accepted' ? '': <div><div>{e._id}</div>
                    <div>{`${e.user_id.first_name} ${e.user_id.last_name}`}</div>
                    <div>{e.email}</div>
                    <div>{e.bank_name}</div>
                    <div>{e.status}</div>
                    <button onClick={() => updateData(e._id)}>ACCEPTED</button>
                    <button onClick={() => deleteData(e._id)}>REJECTED</button></div>}
                    
                    </div>
            })}
            </>
    )
}