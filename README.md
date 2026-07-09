# 📋 Task Management App

A full-stack **Task Management Application** built using **Flask**, **MySQL**, and **Vanilla JavaScript** that enables managers to securely assign, monitor, update, and manage employee tasks in real time.

## 🚀 Live Demo

**Application:** https://task-management-app-eight-gilt.vercel.app

<<<<<<< HEAD
>
=======
> 
>>>>>>> 68dc002 (Fix form layout to single clean row)

## 🔐 Demo Credentials

| Username | Password     |
| -------- | ------------ |
| rishabh  | rishabh@2026 |

> Only **Manager** accounts are authorized to log in.

## 📖 Project Overview

The **Task Management App** is a full-stack web application designed to simplify task assignment and tracking within an organization. Managers can securely log in, assign tasks to employees, update task statuses, monitor ongoing work, and delete completed or unnecessary tasks. All data is stored in a cloud-hosted MySQL database, ensuring reliable, secure, and real-time access. The application follows a RESTful architecture, combining a Flask backend with a responsive frontend built using HTML, CSS, and Vanilla JavaScript.

## ✨ Features

* 🔐 Secure manager authentication with hashed passwords
* 👨‍💼 Manager-only access control
* ➕ Assign tasks using Employee ID, Employee Name, and Task Title
* ✅ Mark tasks as completed or pending
* 🔄 Toggle task status instantly
* ❌ Delete tasks with a single click
* 📊 View all tasks in a live dashboard with status badges
* ☁️ Cloud-hosted MySQL database 
* 🌐 Fully deployed and accessible online via Railway
* 📱 Responsive and user-friendly interface
* 🌙 Dark and Light theme switcher
* ⭐ Animated moving stars background

## 🛠️ Technology Stack

| Category       | Technologies                    |
| -------------- | ------------------------------- |
| Frontend       | HTML5, CSS3, Vanilla JavaScript |
| Backend        | Python, Flask                   |
| Database       | MySQL   |
| Authentication | Werkzeug Password Hashing       |
| Deployment     | Railway                         |

## 📂 Project Structure

```text
task-management-app/
├── frontend/
│   ├── static/
│   │   ├── style.css
│   │   └── script.js
│   └── templates/
│       ├── login.html
│       └── dashboard.html
├── database/
│   └── schema.sql
├── app.py
├── requirements.txt
├── Procfile
├── README.md
└── .gitignore
```

## ⚙️ Local Setup

### Prerequisites

* Python 3.8 or later
* MySQL Server
* Git

### Clone the Repository

```bash
git clone https://github.com/rishabh-397/task-management-app.git
cd task-management-app
```

### Create the Database

```bash
mysql -u root -p < database/schema.sql
```

### Configure Database Credentials

Update the database password inside **app.py**:

```python
password=os.environ.get("DB_PASSWORD", "your_mysql_password"),
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

Log in using the demo credentials provided above.

## 🗄️ Database Schema

### Login Table

Stores authenticated manager accounts.

| Column     | Type                              |
| ---------- | --------------------------------- |
| id         | INT (Primary Key, Auto Increment) |
| username   | VARCHAR(50), UNIQUE               |
| password   | VARCHAR(255)                      |
| role       | ENUM('manager', 'admin')          |
| created_at | TIMESTAMP                         |

### Task Management Table

Stores employee task details.

| Column        | Type                              |
| ------------- | --------------------------------- |
| id            | INT (Primary Key, Auto Increment) |
| emp_id        | VARCHAR(20)                       |
| employee_name | VARCHAR(100)                      |
| task_title    | VARCHAR(50)                       |
| completed     | BOOLEAN                           |
| created_at    | TIMESTAMP                         |
| updated_at    | TIMESTAMP                         |

## 📡 REST API Endpoints

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | `/api/tasks`      | Retrieve all tasks            |
| POST   | `/api/tasks`      | Create a new task             |
| PATCH  | `/api/tasks/<id>` | Toggle task completion status |
| DELETE | `/api/tasks/<id>` | Delete a task                 |

## 🔒 Authentication

User passwords are securely hashed using **Werkzeug** before being stored in the database. Only users with the **Manager** role can access the application dashboard, ensuring secure role-based authentication and authorization.

## 🌐 Deployment

The application is deployed on **Railway**, with its MySQL database also hosted on **Railway**. This cloud-based deployment ensures seamless connectivity, reliable performance, and real-time data synchronization without requiring external database configuration.

## 🚀 Future Enhancements

* Employee login portal
* Admin dashboard
* Task priority management
* Due dates and reminders
* Email notifications
* Search and filter functionality
* Export tasks to PDF/CSV
* JWT-based authentication

## 👨‍💻 Author

**Rishabh Chaturvedi**

**GitHub:** https://github.com/rishabh-397

**LinkedIn:** https://www.linkedin.com/in/rishabh-chaturvedi-21212728a

## 📄 License

This project is licensed under the **MIT License** and is intended for educational and learning purposes.

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. Your support is greatly appreciated!
