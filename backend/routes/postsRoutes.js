const express = require('express');
const router = express.Router();
const {
    getAllPosts, getPostById, createPost, updatePost, deletePost,
} = require('../controllers/postController');
const {authenticateUser} = require("../middleware/authenticate");


router.route('/').get(getAllPosts);

router.route('/:uuid').get(getPostById);

router.route('/').post(authenticateUser, createPost);

router.route('/').put(authenticateUser, updatePost);

router.route('/:uuid').delete(authenticateUser, deletePost);

module.exports = router;
