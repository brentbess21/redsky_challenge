import React from 'react';

import User from './User';

const UserList = (props) => {

    const { users } = props;

    return (
        <div>
            <table>
              <thead>
                  <tr>
                      <th>User List</th>
                  </tr>
              </thead>
              <thead>
                  <tr>
                      <th>Avatar</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map(user=> {
                      return <User user={user} key={user.id}/>
                  })}
              </tbody>
            </table>
        </div>
    )
}

export default UserList;