import React, { FC } from 'react';
import { connect } from 'react-redux';

import { User, State, CreateUserFormProps, CreateUserFormActionProps } from './../types/types';

import Loading from './Loading';

import { 
    closeCreateModal, 
    updateFormValues, 
    resetFormValues, 
    createNewUser, 
    showToast, 
    hideToast 
} from './../actions/users-actions';



const NewUserForm: FC<CreateUserFormProps & CreateUserFormActionProps> = (props) => {

    const { 
        userFormValues, 
        showCreateModal, 
        closeCreateModal, 
        updateFormValues, 
        createNewUser, 
        resetFormValues, 
        showToast, 
        hideToast, 
        loading 
    } = props;

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.name ;
        const value = target.value;
        updateFormValues({...userFormValues, [name]: value});
    }

    const cancelHandler = (e: React.FormEvent) => {
        e.preventDefault();
        closeCreateModal();
        resetFormValues();
    }

    const toastHandler = () => {
        showToast();
        setTimeout(hideToast, 4000);
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = {
            id: Date.now(),
            first_name: userFormValues.first_name,
            last_name: userFormValues.last_name,
            email: userFormValues.email,
            avatar: userFormValues.avatar
        }
        createNewUser(newUser);
        toastHandler();
        resetFormValues();
    }

    if(loading) {
        return <Loading />
    }
    
    return(
        <div>
            {showCreateModal ? (
                <div className='modal-background'>
                    <div className='modal-container'>
                        <div className='modal-header'>
                            <h3>Create New User</h3>
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
                                    <button onClick={submitHandler} className='button'>Create</button>
                                </div>
                            </form>
                        </div>                  
                    </div>
                </div>
            ) : <div></div> }
            
        </div>
    )
}


const mapStateToProps = (state: State) => {
    return({
        loading: state.loading,
        showCreateModal: state.showCreateModal,
        userFormValues: state.userFormValues
    })
}

const mapDispatchToProps = {closeCreateModal, updateFormValues, resetFormValues, createNewUser, showToast, hideToast}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);