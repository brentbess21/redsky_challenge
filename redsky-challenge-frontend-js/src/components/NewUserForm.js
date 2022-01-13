import React from 'react';

const NewUserForm = (props) => {

    const { userFormValues, setUserFormValues, postNewUser, initialUserValues, showCreateModal, setShowCreateModal } = props;

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserFormValues({...userFormValues, [name]: value})
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
        postNewUser(newUser);
        setUserFormValues(initialUserValues);
        setShowCreateModal(false);
    }
    
    return(
        <div>
            {showCreateModal ? (
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
                                <button onClick={()=> setShowCreateModal(false)} className='button-outline'>Cancel</button>
                                <button onClick={submitHandler} className='button'>Create</button>
                            </form>
                        </div>                  
                    </div>
            ) : <div></div> }
            
        </div>
    )
}

export default NewUserForm;