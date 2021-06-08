import React, { useState, useEffect } from 'react';
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users"
function GetRequest() {
    const [users, setUsers] = useState("");
    useEffect(()=>{
        const getUsers = async()=>{
            const {data} = await axios.get(URL)
            setUsers(data);
        }
        getUsers()
    },[])
    console.log(users)

    users && users.length > 0 ? users.map( user=>{return(<li key={user.id}>{user.name}</li>)} ):""
}

export default GetRequest
