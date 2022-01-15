import React from 'react';

import { connect } from 'react-redux';

import { deleteUser, openEditModal, updateFormValues } from '../actions/users-actions';
import EditUserForm from './EditUserForm';


const User = (props) => {

    const { user, deleteUser, openEditModal, updateFormValues } = props;

    const deleteHandler = (e) => {
        e.preventDefault();
        deleteUser(user);
    }

    const editHandler = (e) => {
        e.preventDefault();
        updateFormValues({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar
        });
        openEditModal();
    }


    return (
        <tr className='fs-200'>
            <td><img src={user.avatar} alt={user.last_name} className='avatar' /></td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><button onClick={editHandler} className='button'>Edit</button></td>
            <td><button onClick={deleteHandler} className='button'>Delete</button></td>
        </tr>

        // <EditUserForm />
    )
}

const mapStateToProps = (state) => {
    return({
        loading: state.loading,
        users: state.users,
        showEditModal: state.showEditModal,
        userFormValues: state.userFormValues
    })
}

const mapDispatchToProps = {deleteUser, openEditModal, updateFormValues}

export default connect(mapStateToProps, mapDispatchToProps)(User);
