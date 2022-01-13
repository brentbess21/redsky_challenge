import React from 'react';

const EditUserForm = (props) => {

    const { userFormValues, setUserFormValues, initialUserValues, showEditModal, setShowEditModal } = props;

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserFormValues({...userFormValues, [name]: value})
    }

    return(
        <div>
            {showEditModal? (
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
                        <button onClick={()=> setShowEditModal(false)} className='button-outline'>Cancel</button>
                        <button className='button'>Edit</button>
                    </form>
                </div>                  
            </div>
            ) : <div></div>}
            
        </div>
    )
}

export default EditUserForm;