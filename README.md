# 📋 Task Management App

A full-stack **Task Management Application** built using **Flask**, **MySQL**, and **Vanilla JavaScript** that enables managers to securely assign, monitor, update, and manage employee tasks in real time.

## 🚀 Live Demo

**Application:** https://task-management-app-1yzq.onrender.com/

> **Note:** Since the application is hosted on Render's free tier, the first request may take **30–50 seconds** while the server wakes up.

## 🔐 Demo Credentials

| Username  | Password       |
| --------- | -------------- |
|' rishabh' |' rishabh@2026 |

> Only **Manager** accounts are authorized to log in.

## 📖 Project Overview

The **Task Management App** is a full-stack web application developed to simplify employee task assignment and tracking within an organization. It provides a secure platform where managers can log in, assign tasks to employees, update task statuses, monitor ongoing work, and remove completed or unnecessary tasks. All information is stored in a cloud-hosted MySQL database, ensuring real-time accessibility and reliable data management. The application follows a RESTful architecture, combining a Flask backend with a responsive frontend built using HTML, CSS, and Vanilla JavaScript.

## ✨ Features

* 🔐 Secure manager authentication using hashed passwords
* 👨‍💼 Manager-only access control
* ➕ Assign tasks with Employee ID, Employee Name, and Task Title
* ✅ Mark tasks as completed or pending
* 🔄 Toggle task status instantly
* ❌ Delete tasks with a single click
* 📊 View all tasks in a live table with status badges
* ☁️ Cloud-hosted MySQL database using Aiven
* 🌐 Deployed on Render for online accessibility
* 📱 Responsive and user-friendly interface

## 🛠️ Technology Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript
**Backend:** Python, Flask, Flask-CORS
**Database:** MySQL (Aiven Cloud Database)
**Authentication:** Werkzeug Password Hashing
**Deployment:** Render

## 📂 Project Structure

```text
task-management-app/
├── static/
│   ├── style.css
│   ├── script.js
│   └── images/
├── templates/
│   └── index.html
├── app.py
├── requirements.txt
├── schema.sql
├── README.md
└── .gitignore
```

## ⚙️ Local Setup

### Prerequisites

* Python 3.8 or above
* MySQL Server
* Git

### Clone the Repository

```bash
git clone https://github.com/rishabh-397/task-management-app.git
cd task-management-app
```

### Create the Database

```bash
mysql -u root -p < schema.sql
```

### Configure Database Credentials

Update the following configuration inside **app.py**:

```python
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "your_mysql_password",
    "database": "task_management_db",
}
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
python app.py
```

Visit **http://127.0.0.1:5000** in your browser and log in using the demo credentials.

## 🗄️ Database Schema

### Login Table

Stores authenticated manager accounts.

| Column     | Type                              |
| ---------- | --------------------------------- |
| id         | INT (Primary Key, Auto Increment) |
| username   | VARCHAR(50), UNIQUE               |
| password   | VARCHAR(255)                      |
| role       | ENUM('manager','admin')           |
| created_at | TIMESTAMP                         |

### Task Management Table

Stores employee task information.

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

User passwords are securely hashed using **Werkzeug** before being stored in the database. Only users with the **Manager** role are allowed to access the application dashboard, ensuring secure and role-based access control.

## 🌐 Deployment

The application is deployed on **Render**, while the MySQL database is hosted on **Aiven Cloud**, allowing secure access and persistent storage from anywhere.

## 🚀 Future Enhancements

* Employee login portal
* Admin dashboard
* Task priority management
* Due dates and reminders
* Email notifications
* Search and filter functionality
* Analytics dashboard
* User profile management
* Pagination
* JWT-based authentication

## 👨‍💻 Author

**Rishabh Chaturvedi**

GitHub: https://github.com/rishabh-397

LinkedIn: https://www.linkedin.com/in/rishabh-chaturvedi-21212728a?utm_source=share_via&utm_content=profile&utm_medium=member_android

## 📄 License

This project is licensed under the **MIT License** and is available for educational and learning purposes. Contributions, suggestions, and improvements are always welcome.

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub. Your support motivates continued development and helps others discover the project.
