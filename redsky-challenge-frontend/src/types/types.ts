export interface User {
    id?: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
}

export interface AppActionProps {
    openCreateModal: ()=> void
}

export interface ActionToastProps {
    showActionToast: boolean,
    prevAction: string
}

export interface EditUserFormActionProps {
    resetFormValues: () => void,
    closeEditModal: () => void,
    updateFormValues: (info: User) => void, 
    updateUser: (updatedUser: User) => void, 
    showToast: () => void, 
    hideToast: () => void

}

export interface EditUserFormProps {
    userFormValues: User,
    showEditModal: boolean,
    loading: boolean
}

export interface CreateUserFormActionProps {
    resetFormValues: () => void,
    closeCreateModal: () => void,
    updateFormValues: (info: User) => void, 
    createNewUser: (newUser: User) => void, 
    showToast: () => void, 
    hideToast: () => void

}

export interface CreateUserFormProps {
    userFormValues: User,
    showCreateModal: boolean,
    loading: boolean
}

export interface UserInfoProps {
    user: User,

}

export interface UserInfoActionProps {
    deleteUser: (user: User)=> void, 
    openEditModal: ()=> void, 
    updateFormValues: (info: User)=> void, 
    showToast: ()=> void, 
    hideToast: ()=> void 
}


export interface UserListProps {
    users: User[],
    loading: boolean
}

export interface UserListActionProps {
    getUsers: () => void
}

export interface State {
    loading: boolean,
    errors: string,
    users: User[],
    userFormValues: User,
    showCreateModal: boolean,
    showEditModal: boolean,
    showActionToast: boolean,
    prevAction: string
}

export interface Action {
    type: string,
    payload?: {}
}

