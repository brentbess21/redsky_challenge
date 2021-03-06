import React, { FC } from 'react';
import { connect } from 'react-redux';

import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';
import EditUserForm from './components/EditUserForm';
import ActionToast from './components/ActionToast';

import { State, AppActionProps } from './types/types';

import { openCreateModal } from './actions/users-actions';

const App: FC<AppActionProps> = (props) => {

  const { openCreateModal } = props;

  return (
      <div className='app-container'>
          <ActionToast />
          <div className='title'>
            <h1 className='ff-serif fs-600 uppercase'>Redsky Coding Challenge</h1>
          </div>

          <div className='create-user-btn'>
            <button onClick={()=>{openCreateModal()}} className='button'>Create New User</button>
          </div>
          
          <NewUserForm />
          <EditUserForm />
          <UserList />
      </div>
  );
}

const mapStateToProps = (state: State) => {
  return({
    showCreateModal: state.showCreateModal,
  })
}

const mapDispatchToProps = {openCreateModal}


export default connect(mapStateToProps, mapDispatchToProps)(App);

