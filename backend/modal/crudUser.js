const mongoose = require('mongoose');



const crudUserSchema = mongoose.Schema({

 name : {
  type : String,
  required : [true , "Name is Required!"],
 },

 phone : {
   
  type : String,
  required : [true , "Phone  number is required!"],

 },

 age : {
  type : Number,
  required : [true , "Age is Required!"],
 }



});


const CrudUser = mongoose.model('CrudUser',crudUserSchema);

module.exports = CrudUser;