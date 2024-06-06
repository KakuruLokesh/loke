const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { query } = require('../config/db');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

// Function to register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const userCheck = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );

    const user = newUser.rows[0];

    // Create a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Function to authenticate a user
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const userCheck = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = userCheck.rows[0];

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Function to handle forgot password
// Function to handle forgot password
// Function to handle forgot password
// Function to handle forgot password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists
    const userCheck = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = userCheck.rows[0];
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = await bcrypt.hash(resetToken, 10);
    
    // Calculate token expiry time (1 hour from now)
    const tokenExpiry = new Date();
    tokenExpiry.setTime(tokenExpiry.getTime() + (60 * 60 * 1000)); // Add 1 hour in milliseconds
    const tokenExpiryTimestamp = tokenExpiry.toISOString(); // Convert to ISO string format

    await query('UPDATE users SET reset_password_token = $1, reset_password_expires = $2 WHERE email = $3', [hashedToken, tokenExpiryTimestamp, email]);

    const resetURL = `http://localhost:3000/reset-password/${resetToken}`;
    const message = `You requested a password reset. Please make a PUT request to: \n\n ${resetURL}`;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      to: user.email,
      from: process.env.EMAIL,
      subject: 'Password Reset',
      text: message,
    });

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};



// Function to reset password
const resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  try {
    const userCheck = await query('SELECT * FROM users WHERE reset_password_token IS NOT NULL AND reset_password_expires > NOW()');
    const user = userCheck.rows.find(user => bcrypt.compareSync(resetToken, user.reset_password_token));

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await query('UPDATE users SET password = $1, reset_password_token = NULL, reset_password_expires = NULL WHERE id = $2', [hashedPassword, user.id]);

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  registerUser,
  authUser,
  forgotPassword,
  resetPassword,
};
