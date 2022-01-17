import React, {useEffect, FC } from 'react';
import { connect } from 'react-redux';

import { User, State, UserListProps, UserListActionProps } from './../types/types';

import UserInfo from './UserInfo';
import Loading from './Loading';

import { getUsers } from './../actions/users-actions';

const UserList: FC <UserListProps & UserListActionProps>  = (props) => {

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
                  {users.map((user: User) => {
                      return <UserInfo user ={user} key={user.id} />
                  })}
              </tbody>
            </table>
        </main>
    )
}

const mapStateToProps = (state: State) => {
    return({
        loading: state.loading,
        error: state.errors,
        users: state.users,
    })
}

const mapDispatchToProps = {getUsers}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);