const axios = require('axios');


let initialUsers = [];

const setId = () => {
    return Date.now()
}

async function getInitialUsers () {
    if(initialUsers.length > 0 ) {
        return initialUsers
    }
    try {
        const res = await axios.get('https://reqres.in/api/users')
        axiosUsers = res.data.data
        return axiosUsers
    } catch (err) {
        console.error(err)
    }
}

let users = getInitialUsers();

async function getUsers () {
    return users;
}

async function getUserById(id) {
    users = await users;
    const user = users.find(u => u.id === parseInt(id));
    return user;
}

async function createNewUser(newUser) {
    users = await users;
    users.unshift(newUser);
    return newUser;
}

async function updateUser(id, updatedInfo) {
    users = await users;
    const user = users.find(u=> u.id === parseInt(id))
    if (!user) return null
    users = users.map(u => (u.id === parseInt(id)) ? updatedInfo : u)
    return updatedInfo
}

async function deleteUser(id) {
    users = await users;
    const user = users.find(u => u.id === parseInt(id))
    if (!user) return null
    users = users.filter(u => u.id !== parseInt(id))
    return user;
}



module.exports = {
    getInitialUsers,
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser

}