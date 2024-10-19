const User = require('../modal/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();





// SginUp Api;

const sginUpUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password , salt);
  newUser.password = hashPassword;

  try {

    const existEmail = await User.findOne({
      email : user.email,
    })
    if (existEmail) {
      
      return res.status(400).json({message : "This Email Is Alerady Exist Please Try New Email!"});
    }

    await newUser.save();

    return res.status(201).json({message : "User SginUp Successfully.", result : newUser});
    
  } catch (error) {
    return res.status(500).json({message : error.message});
  }
};

//---------->Login


const login = async (req , res) =>{

  const {email , password} = req.body;

  try {
    const user = await User.findOne({
      email : email,
    })
    if (!user) {
      return res.status(404).json({
        message : "User Not Found!",
      })
      
    }

    const isPasswordCorrect = await bcrypt.compare(password , user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message : "Invalid Password!",
      })
      
    }

    const playLoad = {user}

    const token = await jwt.sign(playLoad , process.env.SECRET_KEY);

    return res.status(200).json({
      message : "User Login Successfully.",
      token : token
    })
    
  } catch (error) {
    return res.status(500).json({message : error.message});

  }

}





module.exports = {
  sginUpUser,
  login,
}