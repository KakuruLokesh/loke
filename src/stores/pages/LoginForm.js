import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log('User logged in:', response.data);
      login(response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button className="form-button" type="submit">Login</button>
      <button type="button" className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</button>
    </form>
  );
};

export default LoginForm;
