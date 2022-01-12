import React from 'react';

import axios from 'axios';


const User = (props) => {
    const { user, setUsers, users } = props;

    const deleteUser = () =>{
        axios.delete(`https://reqres.in/api/users/${user.id}`) 
        .then(res=> {
            setUsers(users.filter(u=>u.id!==user.id))
        })  
        .catch(err=> {
            console.error(err)
        })
    }
    
    return (
        <tr className='fs-200'>
            <td><img src={user.avatar} alt={user.last_name} className='avatar' /></td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><button>Edit</button></td>
            <td><button onClick={deleteUser}>Delete</button></td>
        </tr>
    )
}

export default User;
