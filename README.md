# 🔐 BetterAuth Test Project

This project is a **testing playground** to explore and experiment with **BetterAuth**, a modern authentication library for Node.js applications.

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL or another database supported by Prisma

### Installation
```bash
# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

---

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the Express server in development mode |
| `npx prisma studio` | Opens Prisma Studio to manage your database |
| `npx prisma generate` | Generates Prisma Client |
| `npx prisma db push` | Pushes schema changes to the database |

---

## 🧪 Test the API

### Register a new user
```bash
curl -X POST http://localhost:3000/api/auth/sign-up/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123!",
    "name": "Test User"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/sign-in/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123!"
  }'
```

### Get current user (requires auth token)
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## ⚙️ How it works

This project implements a complete authentication system using:

- **BetterAuth** for handling authentication logic
- **Express** as the backend framework
- **Prisma** as the ORM for database management
- **Prisma Studio** for visual database exploration

---

## 🧠 Tech Stack

- **Node.js / Express** — Backend server
- **BetterAuth** — Authentication library
- **Prisma** — Database ORM
- **PostgreSQL** — Database (or your chosen database)
- **TypeScript** — Type-safe development (optional)

---

## 🔑 Features Tested

- ✅ User registration
- ✅ User login
- ✅ JWT token generation
- ✅ Protected routes
- ✅ Session management
- ✅ Password hashing
- ✅ User profile management

---

## 📝 Environment Variables

Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/betterauth_test"
PORT=3000
```

---

## 🎯 Purpose

This is a **learning and experimentation project** to understand:
- How BetterAuth works
- Integration with Express and Prisma
- Best practices for authentication in Node.js
- Database schema design for auth systems

---

## 📚 Resources

- [BetterAuth Documentation](https://www.better-auth.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Express Documentation](https://expressjs.com/)
