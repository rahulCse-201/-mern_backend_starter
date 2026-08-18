import User from '../models/user.model.js';
import bcrypt from 'bcrypt';


const registerUser = async(req, res)=>{
    console.log("body :", req.body);
    const {userName, fullName, email, password}= req.body;
    if(!userName || !fullName || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    try{
        const existingUser = await User.findOne({$or: [{userName}, {email}]});
        if(existingUser){
            return res.status(400).json({message: "User already exists with this username or email"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({userName, fullName, email,  password: hashedPassword});  // we have to pass all the fields wich are required in the model and with same name as in the model

        
        const createdUser = await User.findById(user._id).select('-password'); // to remove the password field from the response, we can use select method and pass -password to remove the password field from the response
        return res.status(201).json({message: "User registereed successfully", user: createdUser});
    }catch(err){
        console.log(err);
        console.log(err.message);
        return
        res.status(500).json({message: "Internal server error"});
    }
}


const loginUser = async(req, res)=>{
    const {userName, email, password} = req.body;
    
    if((!userName && !email) || !password){
        return res.status(400).json({message : "All fields are required"});
    }

    const existingUser = await User.findOne({$or : [{userName}, {email}]}).select('-password');
    if(!existingUser){
        return res.status(400).json({message : "User not found"});
    }

    return res.status(200).json({message : "User logged in successfully", user: existingUser});

}



export {registerUser, loginUser};