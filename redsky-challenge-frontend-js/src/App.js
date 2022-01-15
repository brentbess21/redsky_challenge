import React from 'react';
import { connect } from 'react-redux';

import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';
import EditUserForm from './components/EditUserForm';
import ActionToast from './components/ActionToast';

import { openCreateModal, openEditModal, closeCreateModal, closeEditModal } from './actions/users-actions';


function App(props) {

  const { openCreateModal, openEditModal } = props;

  // const updateUser = (updatedUser) => {
  //   axios.put(`https://reqres.in/api/users/${user.id}`)
  //     .then(res=> {

  //     })
  //     .catch(err=> {
  //       console.error(err)
  //     })
  // }

  // const openModal = () => {
  //   setShowCreateModal(true);
  // }


  return (

    <div>
      <div className='app-container'>
          {/* <ActionToast /> */}

          <div className='title'>
            <h1 className='ff-serif fs-600 uppercase'>Redsky Coding Challenge</h1>
          </div>

          <div className='create-user-btn'>
            <button onClick={openCreateModal} className='button'>Create New User</button>
          </div>

          <NewUserForm />
          <EditUserForm />
          <UserList />
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return({
    showCreateModal: state.showCreateModal,
    showEditModal: state.showEditModal
  })
}

const mapDispatchToProps = {openCreateModal, openEditModal}

export default connect(mapStateToProps, mapDispatchToProps)(App);
