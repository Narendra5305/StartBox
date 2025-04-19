
const {UserModel} = require("../models/userModel")

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


const CreateUser = async (req, res) =>{
    try {
        const {name ,email , password , role, bio , skills, interests} = req.body ;
        const image =req.file?.path ;

        bcrypt.hash(password , 8 , async(err, hash)=> {
            if (err){
                res.status(201).json({"msg":"there has been an error on hashing password" , err})
            }else{
                const NewUser = UserModel.create({
                    name ,
                    email ,
                    password : hash,
                    role,
                    bio,
                    skills,
                    interests,
                    profilePic:image,
                    
                });
                res.status(200).json({"msg":"sign up successfull" , NewUser})
            }
        });

        
    } catch (error) {
        res.status(500).json({"msg":"there has been an error on register users" , error})
    }
}



const SignInUser = async (req, res) => {
    const {email , password} = req.body ;
    try {
        const user =await UserModel.findOne({email:email})
        if (user){
            bcrypt.compare(password, user.password , async(err, result)=> {
                if (err){
                    res.status(201).json({"msg":"wrong password" , err})
                }else{
                    const token = jwt.sign({ user: user}, process.env.SECRET_KEY);
                    res.status(200).json({"msg":"signin successfull" , token})
                }
            });
        }else{
            res.status(401).json({"msg":"Invalid credentials"})
        }
        
    } catch (error) {
        res.status(500).json({"msg":"there has been an error on register users" , error})
    }
}


const GetUserData = async(req,res) =>{
    console.log(req.user)
    const id = req.user.user._id
    console.log(id)
    try {
        const user = await UserModel.findById(id).select("-password");;

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}




module.exports ={CreateUser , SignInUser ,GetUserData}