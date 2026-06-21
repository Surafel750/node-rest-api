<div align="center">
  <h1>⚡ Node REST API</h1>
  <p>A production-ready RESTful API with JWT Authentication, full CRUD, and MongoDB</p>

  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
</div>

---

## ✨ Features

- 🔐 JWT-based authentication (register/login/refresh)
- 🛡️ Protected routes with middleware
- 📦 Full CRUD operations
- ✅ Input validation with express-validator
- 🚦 Rate limiting & security headers (helmet)
- 🔧 Environment config with dotenv
- 📝 Clean MVC architecture

## 🗂️ Project Structure

```
node-rest-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validate.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   └── app.js
├── .env.example
├── package.json
└── server.js
```

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Surafel750/node-rest-api.git
cd node-rest-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start the server
npm run dev
```

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login & get token | ❌ |
| GET | `/api/users` | Get all users | ✅ |
| GET | `/api/users/:id` | Get user by ID | ✅ |
| PUT | `/api/users/:id` | Update user | ✅ |
| DELETE | `/api/users/:id` | Delete user | ✅ |

## 🌍 Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mydb
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

## 📄 License

MIT © [Surafel](https://github.com/Surafel750)
