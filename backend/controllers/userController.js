import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

//* @desc Auth user & get token
//* @route POST /api/users/login
//* @access Public
const authUser = asyncHandler(async (req, res) => {
    const {  email, password } = req.body;

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        const token = generateToken(user._id);
        res.status(200).json({
            token,
        })
    } else {
        res.status(401);
        throw new Error('Email o contraseña inválida')
    }
})

//* @desc Register a new user
//* @route POST /api/users/sign-up
//* @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, address } = req.body;

    const userExits = await User.findOne({ email })

    if(userExits) {
        res.status(400)
        throw new Error('El usuario ya existe')
    }

     const user = await User.create({
         name, 
         email, 
         password,
         address
     })

    if(user) {
        res.status(201).json({
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400)
        throw new Error('Datos inválidos');
    }
})

//* @desc Get all users
//* @route GET /api/users
//* @access Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select("-password");

    if(users) {
        res.json(users);
    } else {
        res.status(404)
        throw new Error('Users no found')
    }
})


//* @desc Get User profile
//* @route GET /api/users/profile
//* @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        res.status(200).json({
            name: user.name,
            email: user.email,
            address: user.address,
        })
    } else {
        res.status(404)
        throw new Error('Usuario no encontrado')
    }
})

//* @desc Update User profile
//* @route PUT /api/users/profile
//* @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        user.name = req.body.name || user.name
        user.address = req.body.address || user.address

        if(req.body.password) {
            user.password = req.body.password
        }

        const updateUser = await user.save();

        res.status(200).json({
            name: updateUser.name,
            address: updateUser.address,
        })
    } else {
        res.status(404)
        throw new Error('Usuario no encontrado')
    }
})


export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers
}