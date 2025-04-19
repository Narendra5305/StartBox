

const jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
    const token = req.headers.authorization.split(" ")[1]
    
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (decoded){
            req.user = decoded; 
            next();
        }else{
            res.status(401).json({ message: "Token verification failed" });
        }
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token", error: error.message });
    }
}


module.exports = {auth}