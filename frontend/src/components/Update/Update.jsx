import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Update/Update.css';


const Update = () => {

  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [age , setAge] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const onCancelBtn = () =>{
    navigate(-1);
  }

  const handleSubmit = async (e) =>{
    const token = localStorage.getItem('token');
    e.preventDefault();

    try {

      const response = await axios.patch(`https://crudmernbackend-w9vd.onrender.com/cruduser/update/${id}`, {name ,phone, age},
        {
          withCredentials : true,
          headers : {
            Authorization : `Bearer ${token}`,
          }
        }
      )

      console.log(response.data);

      if (response.status === 200) {
        alert('User Updated Successfully');
        navigate(-1);
        
      }
      
      
    } catch (error) {
    
      if (error.response.data.message === "Token is Invalid!") {
        alert("please Login For Updating!")
        
      }
      else {
        alert(error.response.data.message);
        console.log(error.response.data);
        
      }

      
    }
  };

  //-----------------------------------------------------------------------------//
  useEffect(()=>{
    const getuserbyIdAutoFill = async () =>{
       try {

        const response = await axios.get(`https://crudmernbackend-w9vd.onrender.com/cruduser/getuser/${id}`)
        console.log(response.data);
        if (response.status === 200) {
          console.log(response.data.message);
          console.log("getuserbyidresponse ==> ",response);
          
          setName(response.data.result.name)
          setPhone(response.data.result.phone)
          setAge(response.data.result.age);
          

          
        }
        
        
       } catch (error) {
         alert(error.response.data.message)
         console.log(error.response.data);
         
       }
    };

    getuserbyIdAutoFill();

  },[id])

// /-----------------------------------------------------------///

  return (

    <div className='createMainDiv'>
    <div className="create-user-form">
    <h2>Edit User</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          required
        />
      </div>

      <div className="button-group">
        <button type="submit" className="submit-buttonupdate">Edit</button>
        <button type="button" className="back-buttonupdate" onClick={onCancelBtn}>Cancel</button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Update
