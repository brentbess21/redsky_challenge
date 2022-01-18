import axios from "axios";

import { Dispatch } from 'redux';
import { User } from './../types/types';

export const GET_USERS = 'GET_USERS';
export const START_FETCHING_USERS = 'START_FETCHING_USERS';
export const SUCCESS_FETCHING_USERS = 'SUCCESS_FETCHING_USERS';
export const ERROR_FETCHING_USERS = 'ERROR_FETCHING_USERS';
export const OPEN_CREATE_MODAL = 'OPEN_CREATE_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_CREATE_MODAL = 'CLOSE_CREATE_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';
export const UPDATE_FORM_VALUES = 'UPDATE_FORM_VALUES';
export const RESET_FORM_VALUES = 'RESET_FORM_VALUES';
export const START_CREATE_USER = 'START_CREATE_USER';
export const SUCCESS_CREATE_USER = 'SUCCESS_CREATE_USER';
export const ERROR_CREATE_USER = 'ERROR_CREATE_USER';
export const START_DELETE_USER = 'START_DELETE_USER';
export const SUCCESS_DELETE_USER = 'SUCCESS_DELETE_USER';
export const ERROR_DELETE_USER = 'ERROR_DELETE_USER'; 
export const START_UPDATE_USER = 'START_UPDATE_USER';
export const SUCCESS_UPDATE_USER = 'SUCCESS_UPDATE_USER';
export const ERROR_UPDATE_USER = 'ERROR_UPDATE_USER';
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';


export const getUsers = () => (dispatch: Dispatch) => {
    dispatch({type: START_FETCHING_USERS});

    axios.get('http://localhost:8080/api/users')
        .then(res=> {
            const users = res.data;
            dispatch({type:SUCCESS_FETCHING_USERS, payload: users});
        })
        .catch(err=> {
            dispatch({type: ERROR_FETCHING_USERS, payload: err});
        })
}

export const createNewUser = (newUser: User) => (dispatch: Dispatch) => {
    dispatch({type: START_CREATE_USER});

    axios.post('http://localhost:8080/api/users', newUser)
        .then(res=> {
            dispatch({type:SUCCESS_CREATE_USER, payload: res.data});
        })
        .catch(err=> {
            dispatch({type:ERROR_CREATE_USER, payload: err});
        })
}

export const deleteUser = (userInfo: User)  => (dispatch: Dispatch) => {
    dispatch({type: START_DELETE_USER});

    axios.delete(`http://localhost:8080/api/users/${userInfo.id}`)
        .then(res=> {
            dispatch({type:SUCCESS_DELETE_USER, payload: userInfo});
        })
        .catch(err=> {
            dispatch({type: ERROR_DELETE_USER, payload: err});
        })
}

export const updateUser = (userInfo: User) => (dispatch: Dispatch) => {
    dispatch({type: START_UPDATE_USER});

    axios.put(`http://localhost:8080/api/users/${userInfo.id}`, userInfo)
        .then(res=> {
            dispatch({type: SUCCESS_UPDATE_USER, payload: res.data});
        })
        .catch(err => {
            dispatch({type: ERROR_DELETE_USER, payload: err});
        })
}

export const openCreateModal = () => {
    return({type: OPEN_CREATE_MODAL});
}

export const openEditModal = () => {
    return({type: OPEN_EDIT_MODAL});
}

export const closeCreateModal = () => {
    return({type: CLOSE_CREATE_MODAL});
}

export const closeEditModal = () => {
    return({type: CLOSE_EDIT_MODAL});
}

export const updateFormValues = (info: User) => {
    return ({type: UPDATE_FORM_VALUES, payload: info});
}

export const resetFormValues = () => {
    return({type: RESET_FORM_VALUES});
}

export const showToast = () => {
    return({type: SHOW_TOAST});
}

export const hideToast = () => {
    return({type: HIDE_TOAST});
}

