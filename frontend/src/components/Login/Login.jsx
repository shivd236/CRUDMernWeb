import React, { useState } from 'react'
import '../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';





const Login = () => {

const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

const navigate = useNavigate();

const handleSubmit = async (e) =>{
  e.preventDefault();

  try {

    const response = await axios.post('https://crudmernbackend-w9vd.onrender.com/user/login',{email, password});
     console.log(response.data);
     
    if (response.status === 200) {
      alert('User login Successfully');
      localStorage.setItem('token',response.data.token);

      navigate('/');
      window.location.reload();

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
      <h2 className="form-title">Login</h2>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          autoComplete='username'
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
          onChange={(e)=> {setPassword(e.target.value)}}
          autoComplete='current-password'
          placeholder="Enter your password"
          required
        />
      </div>
       
       <div className='btndiv'>
       <button type="submit" className="register-button2">Login</button>
       <button type="submit" className="register-button3" onClick={onclickBack}>Back</button>

       </div>

      <p className='haveAcc'>Don't Have An Acoount? <Link to='/register'>Register</Link></p>

    </form>
  </div>
  
    
  )
}

export default Login;
