import React from 'react';

import User from './User';

const UserList = (props) => {

    const { users, setUsers } = props;

    return (
        <main className='user-list'>
            <h3 className='fs-400 ff-sans-bold uppercase table-header'>User List</h3>
            <table>
              <thead className='ff-sans-bold fs-200 uppercase'>
                  <tr>
                      <th>Avatar</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {users.map(user=> {
                      return <User user={user} users={users} key={user.id} setUsers={setUsers}/>
                  })}
              </tbody>
            </table>
        </main>
    )
}

export default UserList;