import React, { FC } from 'react';
import { connect } from 'react-redux';

import { State, EditUserFormProps, EditUserFormActionProps, User } from './../types/types';

import Loading from './Loading';

import { 
    closeEditModal,
    resetFormValues, 
    updateFormValues, 
    updateUser, 
    showToast, 
    hideToast 
} from '../actions/users-actions';

const EditUserForm: FC<EditUserFormProps & EditUserFormActionProps> = (props) => {

    const { 
        userFormValues,  
        resetFormValues, 
        showEditModal, 
        closeEditModal, 
        updateFormValues, 
        updateUser, 
        showToast, 
        hideToast, 
        loading 
    } = props;

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.name;
        const value = target.value;
        updateFormValues({...userFormValues, [name]: value} as User);
    }

    const cancelHandler = (e: React.FormEvent) => {
        e.preventDefault();
        resetFormValues();
        closeEditModal();
    }

    const toastHandler = () => {
        showToast();
        setTimeout(hideToast, 4000);
    }

    const editHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedUser = {
            id: userFormValues.id,
            first_name: userFormValues.first_name,
            last_name: userFormValues.last_name,
            email: userFormValues.email,
            avatar: userFormValues.avatar
        }
        updateUser(updatedUser);
        closeEditModal();
        toastHandler();
        resetFormValues();
    }

    if(loading) {
        return <Loading />
    }

    return(
        <div>
            {showEditModal? (
            <div className='modal-background'>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <h3>Edit User</h3>
                    </div>

                    <div className='modal-content'>
                        <form>
                            <label className='block uppercase'>First Name</label>
                            <input 
                            type='text'
                            name='first_name'
                            value={userFormValues.first_name}
                            onChange={changeHandler}
                            />

                            <label className='block uppercase'>Last Name</label>
                            <input 
                            type='text'
                            name='last_name'
                            value={userFormValues.last_name}
                            onChange={changeHandler}
                            />

                            <label className='block uppercase'>Email Address</label>
                            <input 
                            type='email'
                            name='email'
                            value={userFormValues.email}
                            onChange={changeHandler}
                            />

                            <label className='block uppercase ff-sans'>Avatar Image Link</label>
                            <input 
                            type='text'
                            name='avatar'
                            value={userFormValues.avatar}
                            onChange={changeHandler}
                            />
                            <div className='form-buttons'>
                                <button onClick={cancelHandler} className='button-outline'>Cancel</button>
                                <button onClick={editHandler} className='button'>Edit</button>
                            </div>
                         
                        </form>
                    </div>                  
                </div>
            </div>
            ) : <div></div>}
            
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return({
        showEditModal: state.showEditModal,
        userFormValues: state.userFormValues,
        loading: state.loading
    })
}


const mapDispatchToProps = {closeEditModal, updateFormValues, resetFormValues, updateUser, showToast, hideToast}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);

