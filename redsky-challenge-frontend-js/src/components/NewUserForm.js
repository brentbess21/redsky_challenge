import React from 'react';

import { connect } from 'react-redux';
import { closeCreateModal, updateFormValues, resetFormValues, createNewUser } from './../actions/users-actions';

const NewUserForm = (props) => {

    const { userFormValues, showCreateModal, closeCreateModal, updateFormValues, createNewUser, resetFormValues } = props;

        const changeHandler = (e) => {
            const name = e.target.name
            const value = e.target.value
            updateFormValues({...userFormValues, [name]: value})
        }

        const cancelHandler = (e) => {
            e.preventDefault();
            closeCreateModal();
            resetFormValues();
        }

        const submitHandler = (e) => {
            e.preventDefault();
            const newUser = {
                id: Date.now(),
                first_name: userFormValues.first_name,
                last_name: userFormValues.last_name,
                email: userFormValues.email,
                avatar: userFormValues.avatar
            }
            createNewUser(newUser);
            resetFormValues();
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


const mapStateToProps = (state) => {
    return({
        loading: state.loading,
        showCreateModal: state.showCreateModal,
        userFormValues: state.userFormValues
    })
}

const mapDispatchToProps = {closeCreateModal, updateFormValues, resetFormValues, createNewUser}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);