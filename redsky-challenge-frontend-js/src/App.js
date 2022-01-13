import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';
import EditUserForm from './components/EditUserForm';
import ActionToast from './components/ActionToast';


const initialUserValues = {
  first_name: '',
  last_name: '',
  email: '',
  avatar: ''
}

const initialUsers = []

function App() {

  const [ users, setUsers ] = useState(initialUsers);
  const [ userFormValues, setUserFormValues ] = useState(initialUserValues);
  const [ showCreateModal, setShowCreateModal ] = useState(false);
  const [ showEditModal, setShowEditModal ] = useState(false);
  const [ showToast, setShowToast ] = useState(false)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res=> {
        const userData = res.data.data;
        setUsers(userData);
      })
      .catch(err=> {
        console.error(err)
      })
  }

  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setShowToast(true);
      })
      .catch(err=> {
        console.error(err);
      })
  }

  // const updateUser = (updatedUser) => {
  //   axios.put(`https://reqres.in/api/users/${user.id}`)
  //     .then(res=> {

  //     })
  //     .catch(err=> {
  //       console.error(err)
  //     })
  // }

  const openModal = () => {
    setShowCreateModal(true);
  }

  useEffect(()=> {
    getUsers();
  },[])

  return (

    <div>
      {showCreateModal || showEditModal ? <div className='modal-background'></div> : null}
      <div className='app-container'>
          <ActionToast showToast={showToast} setShowToast={setShowToast} />

          <div className='title'>
            <h1 className='ff-serif fs-600 uppercase'>Redsky Coding Challenge</h1>
          </div>

          <div className='create-user-btn'>
            <button onClick={openModal} className='button'>Create New User</button>
          </div>


          <NewUserForm userFormValues={userFormValues} setUserFormValues={setUserFormValues} postNewUser={postNewUser} initialUserValues={initialUserValues} showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} />
          <EditUserForm userFormValues={userFormValues} setUserFormValues={setUserFormValues} showEditModal={showEditModal} setShowEditModal={setShowEditModal} />
          <UserList users={users} setUsers={setUsers} showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>
      </div>
    </div>

  );
}

export default App;
