const CrudUser = require('../modal/crudUser');



//-->Crud opretion;


// --->create

const createUser = async (req , res) => {
  const cruduser = req.body;

  const newCrudUser = new CrudUser(cruduser);

  try {

    const existNumber = await CrudUser.findOne({
      phone : cruduser.phone,
    });

    if (existNumber) {

      return res.status(400).json({message : "This Number is Already Exist!"});
      
    }

    await newCrudUser.save();

    return res.status(201).json({message : "User Created Successfully.", result : newCrudUser});
    
  } catch (error) {
    return res.status(500).json({message : error.message});
    
  }
};


//------------------> Read 

const getAllUser = async (req , res) => {

  const cruduser = await CrudUser.find({});

  try {

    return res.status(200).json({message : "Feched All User Successfully.", result : cruduser});
    
  } catch (error) {

    return res.status(500).json({message : error.message});
    
  }
}

//----------------> getuserbyId;

const getuserbyId = async (req, res) =>{
  const id = req.params.id;

  try {
    const cruduser = await CrudUser.findOne({
      _id : id,
    })

    if (!cruduser) {
      return res.status(404).json({
        message : "user Not Found!",
      })
      
    }

    return res.status(200).json({
      message : "User Fechted By Id Successfully.",
      result : cruduser,
    })
    
  } catch (error) {
    return res.status(500).json({message : error.message});
  }
}

//---------------------------> update

const updateUser = async (req, res) =>{
  const id = req.params.id;
  const userUpdate = req.body;

  try {

    const cruduser = await CrudUser.findOne({
      _id : id, 

    })
    if (!cruduser) {
      return res.status(404).json({message : "User Not Found!"});
    }

    await CrudUser.findByIdAndUpdate(id , userUpdate);

    return res.status(200).json({message : "User Updated Successfully." , result : userUpdate});
    
  } catch (error) {

    return res.status(500).json({message : error.message});

  
  }
};

//------------------------------------> delete

const deleteUser = async (req, res) =>{
 
  const id = req.params.id;

  try {

    const cruduser = await CrudUser.findOne({
      _id : id,
    })

    if (!cruduser) {
      return res.status(404).json({
        message : "User Not Found!",
      })
      
    }

    await CrudUser.findByIdAndDelete(id);

    return res.status(200).json({message : "User deleted successfully."});
    
  } catch (error) {
    return res.status(500).json({message : error.message});
    
  }


}






module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getuserbyId,
}