import { React, useEffect, useState }  from 'react';
import axios from 'axios';

import UserList from './components/UserList';

const initialUsers = []


function App() {

  const [ users, setUsers ] = useState(initialUsers);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res=> {
        const userData = res.data.data;
        setUsers(userData)
      })
      .catch(err=> {
        console.error(err)
      })
  }

  useEffect = (()=> {
    getUsers();
  })
  return (
    <div className="app">
      <h1 className='ff-serif fs-600 uppercase'>Redsky Coding Challenge</h1>
      <UserList users={users}/>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
}

export default App;
