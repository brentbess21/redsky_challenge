import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';


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
      })
      .catch(err=> {
        console.error(err);
      })
  }

  const openModal = () => {
    setShowCreateModal(toggle => !toggle)
  }

  useEffect(()=> {
    getUsers();
  },[])

  return (
    <div className=''>
      {showCreateModal ? <div onClick={openModal} className='modal-background'></div> : null}
      <div className='app-container'>
        <div className='title'>
          <h1 className='ff-serif fs-600 uppercase'>Redsky Coding Challenge</h1>
        </div>

        <div className='create-user-btn'>
          <button onClick={openModal} className='button'>Create New User</button>
        </div>


        <NewUserForm userFormValues={userFormValues} setUserFormValues={setUserFormValues} postNewUser={postNewUser} initialUserValues={initialUserValues} showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} />
        <UserList users={users} setUsers={setUsers}/>
      </div>
    </div>
  );
}

export default App;
