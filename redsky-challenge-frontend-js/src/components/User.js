import React from 'react';

const User = (props) => {
    const { user } = props;
    return (
        <tr className='fs-200'>
            <td><img src={user.avatar} alt={user.last_name} className='avatar' /></td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default User;
