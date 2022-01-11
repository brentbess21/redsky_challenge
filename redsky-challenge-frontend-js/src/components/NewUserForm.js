import React from 'react';

const NewUserForm = (props) => {

    const { createUserFormValues, setCreateUserFormValues } = props;

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCreateUserFormValues({...createUserFormValues, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <h3>Create New User</h3>
            <form>
                <label>First Name</label>
                <input 
                type='text'
                name='first_name'
                value={createUserFormValues.first_name}
                onChange={changeHandler}
                />

                <label>Last Name</label>
                <input 
                type='text'
                name='last_name'
                value={createUserFormValues.last_name}
                onChange={changeHandler}
                />

                <label>Email Address</label>
                <input 
                type='email'
                name='email'
                value={createUserFormValues.email}
                onChange={changeHandler}
                />

                <label>Avatar Image Link</label>
                <input 
                type='text'
                name='avatar'
                value={createUserFormValues.avatar}
                onChange={changeHandler}
                />

                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm;