
const {UserModel} = require("../models/userModel")

const bcrypt = require('bcrypt');


const CreateUser = async (req, res) =>{
    try {
        const {name ,email , password , role, bio , skills, interests,} = req.body ;
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



const SignInUser = async () => {
    
}


module.exports ={CreateUser , SignInUser}