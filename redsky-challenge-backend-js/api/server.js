const express = require('express');
const cors = require('cors');

const User = require('./user-model');

const server = express();


server.use(cors({
    origin: 'http://localhost:3000'
}));

server.use(express.json());

//ENDPOINTS

server.get('/', (req, res)=> {
    res.json({
        message: 'Hello World! From my server!'
    })
})

server.get('/api/users', async (req, res)=> {
    try {
        const users = await User.getUsers()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

server.get('/api/users/:id', async (req, res)=> {

    try {
        const { id } = req.params;
        const correctUser = await User.getUserById(id);
        res.status(200).json(correctUser);
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

server.post('/api/users/', async (req, res)=> {
    try {
        const newUser = await User.createNewUser(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

server.put('/api/users/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const updatedUser = await User.updateUser(id, req.body)
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json({
            message: err
        })
    }
})


server.delete('/api/users/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const deletedUser = await User.deleteUser(id)
        res.json(deletedUser)
    } catch(err){
        res.status(500).json({
            message: err
        })
    }
})


module.exports = server;