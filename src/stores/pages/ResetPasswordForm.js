import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ResetPasswordForm.css';

const ResetPasswordForm = () => {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', { resetToken, newPassword });
      alert('Password reset successful.');
      navigate('/login');
    } catch (error) {
      console.error('Error resetting password:', error.response?.data?.message || error.message);
      alert('Failed to reset password.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="form-input" type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required />
      <button className="form-button" type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
