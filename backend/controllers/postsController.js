const UserUpvote = require('../models/UserUpvote');
const Post = require('../models/Posts');
const CustomError = require('../errors');
const {StatusCodes} = require('http-status-codes');

const upvotePost = async (req, res) => {
    try {
        const {postId} = req.params;
        const {userId} = req.user;

        const existingUpvote = await UserUpvote.findOne({
            where: {postId, userId},
        });

        if (existingUpvote) {
            throw new CustomError.BadRequestError('User has already upvoted this post');
        }

        await UserUpvote.create({postId, userId});

        const post = await Post.findByPk(postId);
        if (!post) {
            throw new CustomError.NotFoundError('Post not found');
        }

        await post.increment('upvotes');

        res.status(StatusCodes.OK).json({message: 'Upvote added successfully'});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

const createPost = async (req, res) => {
    try {
        const {content} = req.body;
        const {userId} = req.user;

        // Create a new post
        const post = await Post.create({content, userId});

        res.status(StatusCodes.CREATED).json({post});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{
                model: UserUpvote, as: 'userUpvotes', attributes: ['uuid'],
            },],
        });

        res.status(StatusCodes.OK).json({posts});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

// Get a single post by ID
const getPostById = async (req, res) => {
    try {
        const {postId} = req.params;

        const post = await Post.findByPk(postId, {
            include: [{
                model: UserUpvote, as: 'userUpvotes', attributes: ['uuid'],
            },],
        });

        if (!post) {
            throw new CustomError.NotFoundError('Post not found');
        }

        res.status(StatusCodes.OK).json({post});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

// Update a post by ID
const updatePost = async (req, res) => {
    try {
        const {postId} = req.params;
        const {content} = req.body;

        const post = await Post.findByPk(postId);

        if (!post) {
            throw new CustomError.NotFoundError('Post not found');
        }

        // Check if the user is the owner of the post
        if (post.userId !== req.user.userId) {
            throw new CustomError.ForbiddenError('You are not allowed to update this post');
        }

        // Update the post's content
        await post.update({content});

        res.status(StatusCodes.OK).json({post});
    } catch (error) {
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
};

module.exports = {
    createPost, getAllPosts, getPostById, updatePost, upvotePost,
};

