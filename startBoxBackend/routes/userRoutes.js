const express = require('express');
const UserRouter = express.Router();
const multer = require("multer");
const { storage } = require("../config/cloudinary");
const upload = multer({ storage });


const {CreateUser , SignInUser } = require("../controller/userController")


UserRouter.post('/create', upload.single("image") , CreateUser);


UserRouter.post('/login', (req, res) => {
 
});

UserRouter.get('/profile/:id', (req, res) => {
  
});




module.exports = {UserRouter};
