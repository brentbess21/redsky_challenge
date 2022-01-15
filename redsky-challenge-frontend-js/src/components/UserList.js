import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getUsers } from './../actions/users-actions';

import User from './User';
import Loading from './Loading';

const UserList = (props) => {

    const { users, getUsers, loading } = props

    useEffect(()=> {
        getUsers();
    },[])

    if(loading) {
        return <Loading />
    }

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
                      return <User user={user} users={users} key={user.id} />
                  })}
              </tbody>
            </table>
        </main>
    )
}

const mapStateToProps = (state) => {
    return({
        loading: state.loading,
        error: state.error,
        users: state.users,
    })
}

const mapDispatchToProps = {getUsers}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);