import React, { useEffect, useState } from 'react';
import '../Read/Read.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchAllUserData = async () => {
    try {
      const response = await axios.get('http://localhost:6600/cruduser/getall-user');
      console.log(response.data);
      setData(response.data.result);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data);
    }
  };

  //delete-----user functionallty

  const deleteUserData = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.delete(`http://localhost:6600/cruduser/delete/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      

      if (response.status === 200) {

        alert('User Deleted Successfully');
      
        setData(data.filter((user) => user._id !== id)); // Remove the deleted user from the state without reloading the page

      }

    } catch (error) {
        if (error.response.data.message === "Token is Invalid!") {
          alert('Please Login For Deleted!')
          
        }

        else {
          alert(error.response.data.message);
          console.log(error.response.data);
          
        }
    }
  };

//-----------------------------------------------------------------//

  useEffect(() => {
    fetchAllUserData();
  }, []);



  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Edit/Delete (Button)</th>
          </tr>
        </thead>
        <tbody>
        {data.map((value, index) => (
    <tr key={value._id}>
      <td data-label="Index">{index + 1}</td>
      <td data-label="Name">{value?.name}</td>
      <td data-label="Phone">{value?.phone}</td>
      <td data-label="Age">{value?.age}</td>
      <td data-label="Actions">
        <button className='btnEdit' onClick={() => navigate(`/update/${value._id}`)}>Edit</button>
        <button className='btnDel' onClick={() => deleteUserData(value._id)}>Delete</button>
      </td>
    </tr>
  ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
