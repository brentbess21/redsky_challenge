import React from 'react';

const User = (props) => {
    const { user } = props;
    return (
        <tr>
            <td>picture</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default User;
