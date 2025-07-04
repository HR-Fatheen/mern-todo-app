# 📝 MERN Todo List Web App

This is a full-stack Todo List Web Application built using the **MERN Stack** – MongoDB, Express, React, and Node.js. It allows users to add, mark complete, and delete tasks in real-time.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://mern-todo-app-plum.vercel.app](https://mern-todo-app-plum.vercel.app)  
- **Backend (Render):** [https://mern-todo-app-7z5l.onrender.com](https://mern-todo-app-7z5l.onrender.com)

## 📁 Project Structure
  mern-todo-app/
  │
  ├── client/             # React frontend
    ├── App.js
    ├── index.js
    └── index.css
    ├── .env
    └── package.json
    ├── public/
    ├── src/
    ├── components/
      ├── TodoInput.jsx
      ├── TodoItem.jsx
      └── TodoList.jsx

  └── server/             # Express backend
    ├── index.js
    ├── models/Todo.js
    ├── routes/todos.js
    ├── .env
    └── package.json

## 🔧 Features

- Add a new todo item
- Mark todo as complete or incomplete
- Delete todo items
- Connect frontend and backend via RESTful APIs
- Fully deployed on the cloud (Vercel + Render)

## ⚙️ Technologies Used

### Frontend:
- React
- Axios
- CSS

### Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📦 Installation (Local Development)

# Clone the repo
```bash
git clone https://github.com/HR-Fatheen/mern-todo-app.git
```

# Setup backend
```bash
cd mern-todo-app/server
npm install
npm run start
```

# Setup frontend
```bash
cd ../client
npm install
npm run start
```

Create a .env file in server/:
```bash
MONGO_URI=your_mongo_db_connection_string
```
And in client/.env:
```bash
REACT_APP_API_BASE_URL=https://your-render-backend-url
```

# 🙌 Acknowledgments
This project was built as part of the DevTown Bootcamp. Thanks to their guidance and hands-on tasks, I successfully built and deployed a working MERN stack application.
