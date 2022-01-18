import express from 'express';
import cors from 'cors';

import  { 
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser 
}  from './user-model';

const server = express();

server.use(cors({
    origin: 'http://localhost:3000'
}));

server.use(express.json());



server.get('/api/users', async (req, res)=> {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({
            message: err,
            customMessage: "There was an error trying to get the users"
        })
    }
})

server.get('/api/users/:id', async (req, res)=> {

    try {
       
        const { id } = req.params;
        const correctUser = await getUserById(id);
        if (!correctUser) {
            res.status(404).json({
                customMessage: `User with ID:${id} doesn't exist`
            })
            return 
        }
        res.status(200).json(correctUser);
    } catch (err) {
        res.status(500).json({
            message: err,
            customMessage: "There was an error trying to get that user"
        })
    }
})

server.post('/api/users/', async (req, res)=> {
    try {
        const newUser = await createNewUser(req.body)
        if(!newUser) {
            res.status(400).json({
                customMessage: "The user couldn't be created"
            })
            return
        }
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json({
            message: err,
            customMessage: "There was an error trying to create that user"
        })
    }
})

server.put('/api/users/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const updatedUser = await updateUser(id, req.body)
        if(!updatedUser) {
            res.status(400).json({
                customMessage: `Could not update user`
            })
            return
        } 
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json({
            message: err,
            customMessage: "There was an error trying to update that user"
        })
    }
})


server.delete('/api/users/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id)
        if(!deletedUser) {
            res.status(400).json({
                customMessage: 'Could not remove user'
            })
            return
        }
        res.status(200).json(deletedUser)
    } catch(err){
        res.status(500).json({
            message: err,
            customMessage: "There was an error trying to delete that user"
        })
    }
})


export default server;