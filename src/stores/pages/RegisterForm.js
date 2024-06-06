import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Import CSS file

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Register the user
      const registerResponse = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('User registered:', registerResponse.data);

      // Automatically log in the user
      const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('User logged in:', loginResponse.data);

      // Save the token to local storage (or state management solution)
      localStorage.setItem('token', loginResponse.data.token);

      // Navigate to the home page or dashboard
      navigate('/');
    } catch (error) {
      console.error('Registration or login failed:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button className="form-submit" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
