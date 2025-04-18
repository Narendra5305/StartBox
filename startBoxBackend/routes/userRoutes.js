const express = require('express');

const UserRouter = express.Router();
const multer = require("multer");
const { storage } = require("../config/cloudinary");
const {auth} = require("../middleware/auth");
const upload = multer({ storage });



const {CreateUser , SignInUser,GetUserData } = require("../controller/userController")



UserRouter.post('/create', upload.single("image") , CreateUser);

UserRouter.post('/login',  SignInUser);

UserRouter.get('/profile/:id' , GetUserData);



module.exports = {UserRouter};
