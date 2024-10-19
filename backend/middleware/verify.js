const jwt = require('jsonwebtoken');
const User = require('../modal/user');


const verifyToken = (req, res, next) =>{
  const authHeader = req.headers["authorization"];


  
  if (!authHeader) {
    return res.status(403).json({message : "Token Is Missing!"});
    
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({message : "Token is Missing!"})
    
  }

  jwt.verify(token , process.env.SECRET_KEY , async (err , user) =>{

    if (err) {
      return res.status(403).json({message : "Token is Invalid!"});
      
    }
    
    req.user = await User.findById(user.user._id).select('-password');
    // console.log(req.user);
    

    next()

  })

  
};


module.exports = verifyToken;