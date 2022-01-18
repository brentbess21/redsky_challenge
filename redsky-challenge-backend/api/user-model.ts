import axios from 'axios';
import { User } from './types';


declare global {
    var usersCache: User[]
  }

global.usersCache = []

function setUserCache (usersObj: User[]) {
    global.usersCache = usersObj;
}

async function getUsersCache () {
    if(global.usersCache.length > 0 ) {
        return global.usersCache;
    }
    try {
        const res = await axios.get('https://reqres.in/api/users')
        const axiosUsers = res.data.data
        setUserCache(axiosUsers);
        return global.usersCache;
    } catch (err) {
        console.error("There was an error gettting initial users", err)
    }
}

async function getUsers () {
    const usersObj = getUsersCache();
    return usersObj;
}

async function getUserById(id: string) {
    const usersObj = await getUsersCache();
    if(!usersObj) {
        return;
    }
    const user = usersObj.find(u => u.id === parseInt(id));
    return user;
}

async function createNewUser(newUser: User) {
    const usersObj = await getUsersCache();
    if (!usersObj) {
        return;
    }

    if(!newUser.first_name || !newUser.last_name) {
        return
    }
    let maxId = Math.max.apply(Math, usersObj.map(u => u.id))
    newUser.id = maxId + 1;
    usersObj.unshift(newUser);
    setUserCache(usersObj);
    return newUser;
}

async function updateUser(id: string, updatedInfo: User) {
    let usersObj= await getUsersCache();
    if(!usersObj) {
        return;
    }
    if(!updatedInfo.first_name || !updatedInfo.last_name) {
        return
    }
    updatedInfo.id = parseInt(id)
    const user = usersObj.find(u=> u.id === parseInt(id))
    if (!user) return null
    console.log(updatedInfo)
    usersObj = usersObj.map(u => (u.id === parseInt(id)) ? u = updatedInfo : u)
    setUserCache(usersObj);
    return updatedInfo
}

async function deleteUser(id: string) {
    let usersObj = await getUsersCache();
    if(!usersObj) {
        return
    }
    const user = usersObj.find(u => u.id === parseInt(id))
    if (!user) return null
    usersObj = usersObj.filter(u => u.id !== parseInt(id))
    setUserCache(usersObj);
    return user;
}



export {
    getUsersCache,
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser

}