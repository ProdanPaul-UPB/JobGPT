const express = require('express');
const router = express.Router();
const {
    getAllPosts, getPostById, createPost, updatePost,
} = require('../controllers/postsController');
const {authenticateUser} = require("../middleware/authenticate");


router.route('/').get(getAllPosts);

router.route('/:uuid').get(getPostById);

router.route('/').post(authenticateUser, createPost);

router.route('/').put(authenticateUser, updatePost);

module.exports = router;
