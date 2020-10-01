const express = require('express');
const User = require('../services/user.js');
const { authenticateToken } = require('../middleware/jwt');
const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const allUsers = await User.findAllUsers();
        res.json(allUsers);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.get('/:userID', async (req, res) => {
    try {
        const users = await User.findUser(req.params.userID);
        res.json(users);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.put('/:userID', authenticateToken, async (req, res) => {
    try {
        const editedUser = await User.updateUser(req.params.userID, req.body);
        res.json(editedUser);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.delete('/:userID', authenticateToken, async (req, res) => {
    try {
        const deletedUser = await User.deleteUser(req.params.userID);
        res.json(deletedUser);
    } catch (err) {
        res.status(404).json({ message: err });
    }
})

module.exports = router;