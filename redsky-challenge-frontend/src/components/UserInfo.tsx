import React, { FC } from 'react';
import { connect } from 'react-redux';

import { State, UserInfoProps, UserInfoActionProps } from './../types/types';

import { 
    deleteUser, 
    openEditModal, 
    updateFormValues, 
    showToast, 
    hideToast 
} from '../actions/users-actions';


const UserInfo: FC <UserInfoProps & UserInfoActionProps> = (props) => {

    const { 
        user, 
        deleteUser, 
        openEditModal, 
        updateFormValues, 
        showToast, 
        hideToast 
    } = props;

    const toastHandler = () => {
        showToast();
        setTimeout(hideToast, 4000);
    }

    const deleteHandler = (e: React.FormEvent) => {
        e.preventDefault();
        deleteUser(user);
        toastHandler();
    }

    const editHandler = (e: React.FormEvent) => {
        e.preventDefault();
        updateFormValues({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar
        });
        openEditModal();
    }

    const ghostImg = 'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/959/original/ghost.png'

    return (
        <tr className='fs-200'>
            {user.avatar === '' 
            ? 
            <td><img src={ghostImg} alt={user.last_name} className='avatar' /></td> 
            : 
            <td><img src={user.avatar} alt={user.last_name} className='avatar' /></td>}
            
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><button onClick={editHandler} className='button'>Edit</button></td>
            <td><button onClick={deleteHandler} className='button'>Delete</button></td>
        </tr>
    )
}

const mapStateToProps = (state: State) => {
    return({
        loading: state.loading,
        users: state.users,
        showEditModal: state.showEditModal,
        userFormValues: state.userFormValues
    })
}

const mapDispatchToProps = {deleteUser, openEditModal, updateFormValues, showToast, hideToast}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
