import { START_FETCHING_USERS, SUCCESS_FETCHING_USERS, ERROR_FETCHING_USERS, OPEN_CREATE_MODAL, OPEN_EDIT_MODAL, CLOSE_CREATE_MODAL, CLOSE_EDIT_MODAL, UPDATE_FORM_VALUES, RESET_FORM_VALUES, START_CREATE_USER, SUCCESS_CREATE_USER, ERROR_CREATE_USER, START_DELETE_USER, SUCCESS_DELETE_USER, ERROR_DELETE_USER, START_UPDATE_USER, SUCCESS_UPDATE_USER, ERROR_UPDATE_USER } from "../actions/users-actions"

export const initialState = {
    loading: false,
    error: '',
    users: [],
    userFormValues: {
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
      },
    showCreateModal: false,
    showEditModal: false,
    showToast: false
}


const reducer = (state = initialState, action) => {
    switch(action.type) {

        case(START_FETCHING_USERS):
            return({...state, loading: true})
        
        case(SUCCESS_FETCHING_USERS):
            return({...state, loading: false, users: action.payload})
        
        case(ERROR_FETCHING_USERS):
            return({...state, loading: true, error: action.payload})

        case(OPEN_CREATE_MODAL):
            return({...state, showCreateModal: true})

        case(OPEN_EDIT_MODAL):
            return({...state, showEditModal: true})

        case(CLOSE_CREATE_MODAL):
            return({...state, showCreateModal: false})

        case(CLOSE_EDIT_MODAL):
            return({...state, showEditModal: false})

        case(UPDATE_FORM_VALUES):
            return({...state, userFormValues: action.payload})

        case(RESET_FORM_VALUES):
            return({
                ...state,
                userFormValues: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    avatar: ''
            }
        })

        case(START_CREATE_USER):
            return({...state, loading: true})
        
        case(SUCCESS_CREATE_USER):
            return({
                ...state,
                loading: false,
                users: [action.payload, ...state.users],
                showCreateModal: false
            })

        case(ERROR_CREATE_USER):
            return({...state, loading: false, error: action.payload})
        
        case(START_DELETE_USER):
            return({...state, loading: true})

        case(SUCCESS_DELETE_USER):
            const correctDeletedUser = action.payload
            const updatedUsers = state.users.filter(u=>u.id !== correctDeletedUser.id)
            return({...state, loading: false, users: updatedUsers })

        case(ERROR_DELETE_USER):
            return({...state, loading: false, error: action.payload})

        case(START_UPDATE_USER):
            return({...state, loading: true})

        case(SUCCESS_UPDATE_USER):
            return({...state, loading: false})

        case(ERROR_UPDATE_USER):
            return({...state, loading: false, error: action.payload})

        default:
            return state
    }
}

export default reducer;


