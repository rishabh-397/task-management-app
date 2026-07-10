# Task Management App

A full-stack **Task Management Application** developed using **Flask**, **MySQL**, **HTML**, **CSS**, and **Vanilla JavaScript**. The application enables managers to securely assign, monitor, update, and manage employee tasks through an intuitive and responsive web interface. It incorporates modern UI animations, multiple themes, and secure authentication to provide an efficient task management experience.

---

## Live Demo

**Application:** https://task-management-app-eight-gilt.vercel.app

> **Note:** The frontend is hosted on Vercel, while the MySQL database is hosted on My SQL WorkBench. The initial request may take a few seconds to load.

---

## Demo Credentials

| Field | Value |
|-------|-------|
| Username | rishabh |
| Password | rishabh@2026 |

> Only users with the **Manager** role are authorized to access the application.

---

# Project Overview

The Task Management App is designed to streamline employee task management within an organization. Managers can securely log in, assign tasks to employees, monitor progress, update task completion status, and remove completed or unnecessary tasks.

The application follows a RESTful architecture with a Flask backend and a responsive frontend developed using HTML, CSS, and Vanilla JavaScript. All application data is stored in a cloud-hosted MySQL database on Railway, ensuring centralized and reliable data management.

---

# Features

### Authentication & Security

- Secure manager authentication
- Password hashing using Werkzeug
- Session-based authentication
- Role-based access control
- Parameterized SQL queries
- Environment variable configuration for sensitive credentials

### Task Management

- Create employee tasks
- Update task completion status
- Delete tasks
- View all assigned tasks
- Real-time task statistics
- Employee-wise task tracking

### User Experience

- Responsive interface for desktop and mobile devices
- Live search and filtering
- Loading indicators
- Toast notifications
- Confirmation dialogs before deletion
- Empty state handling
- Smooth page transitions

### User Interface

- Animated meteor shower background
- Nebula glow effects
- Twinkling star animations
- Four built-in themes:
  - Dark
  - Light
  - Purple
  - Ocean

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Python, Flask |
| Database | MySQL (Railway Cloud) |
| Authentication | Werkzeug Password Hashing |
| Deployment | Vercel + Railway |

---

# Project Structure

```text
task-management-app/
│
├── frontend/
│   ├── static/
│   │   ├── style.css
│   │   └── script.js
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
├── vercel.json
├── README.md
└── .gitignore
```

---

# Database Schema

## Login Table

Stores manager authentication details.

| Column | Type |
|---------|------|
| id | INT (Primary Key) |
| username | VARCHAR(50) |
| password | VARCHAR(255) |
| role | ENUM('manager','admin') |
| created_at | TIMESTAMP |

---

## Task Management Table

Stores employee task information.

| Column | Type |
|---------|------|
| id | INT (Primary Key) |
| emp_id | VARCHAR(20) |
| employee_name | VARCHAR(100) |
| task_title | VARCHAR(50) |
| completed | BOOLEAN |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

# REST API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PATCH | `/api/tasks/<id>` | Update task status |
| DELETE | `/api/tasks/<id>` | Delete a task |

---

# Local Installation

## Prerequisites

- Python 3.8 or later
- MySQL Server
- Git

## Clone the Repository

```bash
git clone https://github.com/rishabh-397/task-management-app.git

cd task-management-app
```

## Create the Database

```bash
mysql -u root -p < database/schema.sql
```

## Configure Database

Update the database credentials inside `app.py`.

```python
password=os.environ.get("DB_PASSWORD", "your_mysql_password")
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

# Deployment

The application is deployed using:

- **Frontend:** Vercel
- **Backend:** Flask on Vercel (`@vercel/python`)
- **Database:** Railway MySQL

The backend securely connects to the Railway MySQL instance using environment variables.

---

# Security

The application implements several security best practices, including:

- Password hashing with Werkzeug (PBKDF2)
- Session-based authentication
- Role-based authorization
- Parameterized SQL queries
- HTTPS support on deployment
- Environment variables for sensitive configuration

---

# Sample Data

The database includes sample employee tasks.

| Employee ID | Employee Name | Task | Status |
|-------------|---------------|------|--------|
| E101 | Ravi Kumar | Group Discussion | Pending |
| E102 | Anita Sharma | Meeting | Completed |
| E103 | John Mathew | Report Submission | Pending |

---

# Future Enhancements

- Employee login system
- Administrator dashboard
- Task priority management
- Due dates and reminders
- Email notifications
- Task export (PDF/CSV)
- Analytics dashboard
- JWT authentication
- Pagination
- Persistent theme preferences

---

# Troubleshooting

### Invalid Username or Password

Ensure that the provided credentials match the records stored in the `login` table.

### Database Connection Error

Verify all database environment variables:

- DB_HOST
- DB_PORT
- DB_USER
- DB_PASSWORD
- DB_NAME

### Tasks Not Displaying

- Refresh the browser.
- Check the browser developer console.
- Confirm the database connection is active.

---

# Author

**Rishabh Chaturvedi**

GitHub  
https://github.com/rishabh-397

LinkedIn  
https://www.linkedin.com/in/rishabh-chaturvedi-21212728a
