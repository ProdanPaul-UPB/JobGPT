const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (error) {
        console.log(error.stack)
        return res.status(400).json({error: 'Failed to create user'});
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({error: 'Failed to retrieve users'});
    }
});

router.get('/:uuid', async (req, res) => {
    const {uuid} = req.params;
    try {
        const user = await User.findByPk(uuid);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({error: 'Failed to retrieve user'});
    }
});

router.put('/:uuid', async (req, res) => {
    const {uuid} = req.params;
    try {
        const user = await User.findByPk(uuid);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }

        // Update user attributes
        await user.update(req.body);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({error: 'Failed to update user'});
    }
});

router.delete('/:uuid', async (req, res) => {
    const {uuid} = req.params;
    try {
        const user = await User.findByPk(uuid);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }

        await user.destroy();

        return res.status(204).send(); // 204 No Content response
    } catch (error) {
        return res.status(500).json({error: 'Failed to delete user'});
    }
});

module.exports = router;
