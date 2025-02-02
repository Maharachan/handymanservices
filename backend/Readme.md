# Handy Man Services Backend

A robust backend implementation for user authentication using Node.js, Express, and MongoDB. This system includes email verification, password reset functionality, and JWT-based authentication.

## Features

- 🔐 User Authentication (Register/Login/Logout)

- ✉️ Email Verification System
- 🔑 Password Reset Functionality
- 🎫 JWT Token Based Authentication
- 📧 Email Notifications using Nodemailer
- 🔒 Secure Password Hashing
- 🛡️ Protected Routes
- 🍪 HTTP-Only Cookie Implementation

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Nodemailer
- bcryptjs
- Cookie Parser
- CORS

## Prerequisites

Before running this project, make sure you have:

- Node.js installed (v14+ recommended)
- MongoDB installed and running
- SMTP credentials (using Brevo/SendinBlue)

## Environment Variables

Create a `.env` file with .env.example file

## Installation

1. Clone the repository
2. Install dependencies
3. Start the server

```bash
npm install
npm start or npm run server
```

## API Documentation

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/send-verify-otp` - Send email verification OTP
- `POST /api/auth/verify-account` - Verify user account
- `GET /api/auth/is-auth` - Check authentication status
- `POST /api/auth/send-reset-otp` - Send password reset OTP
- `POST /api/auth/reset-password` - Reset user password

### User Routes
- `GET /api/user/data` - Get user data




