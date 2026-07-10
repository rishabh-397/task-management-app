📋 Task Management App

A full-stack Task Management Application built using Flask, MySQL, and Vanilla JavaScript that enables managers to securely assign, monitor, update, and manage employee tasks in real time.

🚀 Live Demo

Application: https://task-management-app-eight-gilt.vercel.app

🔐 Demo Credentials
Username	Password
rishabh	rishabh@2026

Only Manager accounts are authorized to log in.

📖 Project Overview

The Task Management App is a full-stack web application designed to simplify task assignment and tracking within an organization. Managers can securely log in, assign tasks to employees, update task statuses, monitor ongoing work, and delete completed or unnecessary tasks. The application follows a RESTful architecture with a Flask backend, a MySQL database, and a responsive frontend developed using HTML, CSS, and Vanilla JavaScript. Passwords are securely stored using hashing to ensure user authentication remains protected.

✨ Features
🔐 Secure manager authentication with hashed passwords
👨‍💼 Manager-only access control
➕ Assign employee tasks
✏️ Update task details
✅ Mark tasks as completed or pending
🔄 Toggle task status instantly
❌ Delete tasks with one click
📊 Live task dashboard
☁️ Cloud-hosted MySQL database
🌐 Fully responsive interface
🌙 Dark & Light theme support
⭐ Animated moving stars background
⚡ Fast RESTful API communication
🛠️ Technology Stack
Category	Technologies
Frontend	HTML5, CSS3, Vanilla JavaScript
Backend	Python, Flask
Database	MySQL
Authentication	Werkzeug Password Hashing
API	REST API
Frontend Hosting	Vercel
Backend Hosting	Railway
Version Control	Git & GitHub
📂 Project Structure
task-management-app/
│
├── frontend/
│   ├── static/
│   │   ├── style.css
│   │   ├── script.js
│   │   └── stars.js
│   │
│   └── templates/
│       ├── login.html
│       └── dashboard.html
│
├── database/
│   └── schema.sql
│
├── app.py
├── requirements.txt
├── Procfile
├── README.md
└── .gitignore
⚙️ Local Setup
Prerequisites
Python 3.8+
MySQL Server
Git
Clone Repository
git clone https://github.com/rishabh-397/task-management-app.git
cd task-management-app
Create Database
mysql -u root -p < database/schema.sql
Configure Database

Update your database credentials inside app.py or configure the following environment variables.

DB_HOST
DB_USER
DB_PASSWORD
DB_NAME
Install Dependencies
pip install -r requirements.txt
Run the Project
python app.py

Open your browser:

http://127.0.0.1:5000

Login using the demo credentials.

🗄️ Database Schema
Login Table
Column	Type
id	INT (Primary Key)
username	VARCHAR(50) UNIQUE
password	VARCHAR(255)
role	ENUM('manager','admin')
created_at	TIMESTAMP
Tasks Table
Column	Type
id	INT (Primary Key)
emp_id	VARCHAR(20)
employee_name	VARCHAR(100)
task_title	VARCHAR(100)
completed	BOOLEAN
created_at	TIMESTAMP
updated_at	TIMESTAMP
📡 REST API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Retrieve all tasks
POST	/api/tasks	Create a new task
PATCH	/api/tasks/<id>	Toggle task status
DELETE	/api/tasks/<id>	Delete a task
🔒 Authentication

The application uses Werkzeug Password Hashing to securely hash passwords before storing them in the database. Only authenticated Manager accounts can access the dashboard, ensuring secure role-based authorization.

🌐 Deployment
Service	Platform
Frontend	Vercel
Backend	Railway
Database	Railway MySQL

The frontend is deployed on Vercel, while the Flask backend and MySQL database are hosted on Railway, ensuring reliable performance and seamless communication between the client and server.

👨‍💻 Author

Rishabh Chaturvedi

GitHub: https://github.com/rishabh-397

LinkedIn: https://www.linkedin.com/in/rishabh-chaturvedi-21212728a

🤝 Contributing

Contributions are welcome!