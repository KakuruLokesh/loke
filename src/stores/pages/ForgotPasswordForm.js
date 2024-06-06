import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPasswordForm.css';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      alert('Password reset link has been sent to your email.');
    } catch (error) {
      console.error('Error sending password reset email:', error.response?.data?.message || error.message);
      alert('Failed to send password reset email.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="form-input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button className="form-button" type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPasswordForm;
