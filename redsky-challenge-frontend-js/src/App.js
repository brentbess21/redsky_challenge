import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';


const initialCreateUserValues = {
  first_name: '',
  last_name: '',
  email: '',
  avatar: ''
}
const initialUsers = []

function App() {

  const [ users, setUsers ] = useState(initialUsers);
  const [ createUserFormValues, setCreateUserFormValues ] = useState(initialCreateUserValues)

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

  useEffect(()=> {
    getUsers();
  },[])

  return (
    <div className="flow">
      <h1 className='ff-serif fs-600 uppercase'>Redsky Coding Challenge</h1>
      <button>Create New User</button>
      <NewUserForm createUserFormValues={createUserFormValues} setCreateUserFormValues={setCreateUserFormValues} />
      <UserList users={users}/>
    </div>
  );
}

export default App;