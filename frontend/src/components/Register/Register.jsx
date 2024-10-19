import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Register/Register.css' // Assuming you have a CSS file for styling

const RegisterForm = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {

      const response = await axios.post('https://crudmernbackend-w9vd.onrender.com/user/sginup',{name ,email, password});
       console.log(response.data);
       
      if (response.status === 201) {
        alert('User SginUp Successfully');

        navigate('/login');
        
      }
      
    } catch (error) {
       alert(error.response.data.message);
       console.log(error.response.data);
       
      
    }
  };


  const onclickBack = () =>{
    navigate(-1);
  }







  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) =>{setName(e.target.value)}}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            autoComplete='new-password'
            onChange={(e)=> {setPassword(e.target.value)}}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div className='btndiv'>
          
        <button type="submit" className="register-button2">Register</button>
        <button type="submit" className="register-button3" onClick={onclickBack}>Back</button>

        </div>

      <p className="haveAcc">Alerady Have An Acoount? <Link className="a" to='/login'>Login</Link></p>

      </form>
    </div>
  );
};

export default RegisterForm;
