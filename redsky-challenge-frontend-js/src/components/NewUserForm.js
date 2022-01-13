import React from 'react';

const NewUserForm = (props) => {

    const { createUserFormValues, setCreateUserFormValues, postNewUser, initialCreateUserValues, showModal, setShowModal } = props;

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCreateUserFormValues({...createUserFormValues, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            first_name: createUserFormValues.first_name,
            last_name: createUserFormValues.last_name,
            email: createUserFormValues.email,
            avatar: createUserFormValues.avatar
        }
        postNewUser(newUser);
        setCreateUserFormValues(initialCreateUserValues);
        setShowModal(false);
    }
    
    return(
        <div>
            {showModal ? (
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
                                value={createUserFormValues.first_name}
                                onChange={changeHandler}
                                />

                                <label className='block uppercase'>Last Name</label>
                                <input 
                                type='text'
                                name='last_name'
                                value={createUserFormValues.last_name}
                                onChange={changeHandler}
                                />

                                <label className='block uppercase'>Email Address</label>
                                <input 
                                type='email'
                                name='email'
                                value={createUserFormValues.email}
                                onChange={changeHandler}
                                />

                                <label className='block uppercase ff-sans'>Avatar Image Link</label>
                                <input 
                                type='text'
                                name='avatar'
                                value={createUserFormValues.avatar}
                                onChange={changeHandler}
                                />
                                <button onClick={()=> setShowModal(false)} className='button-outline'>Cancel</button>
                                <button onClick={submitHandler} className='button'>Create</button>
                            </form>
                        </div>                  
                    </div>
                </div>
            ) : <div></div> }
            
        </div>
    )
}

export default NewUserForm;