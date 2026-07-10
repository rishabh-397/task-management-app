# Task Management App

A modern, secure, and visually engaging full-stack task management platform designed for managers to efficiently assign, track, update, and manage employee tasks in real-time.

## Live Demo
[Open Application] - https://task-management-app-eight-gilt.vercel.app/

**Demo Credentials**  
Username: `rishabh`  
Password: `rishabh@2026`  
*(Manager access only)*

## ✨ Features
- Secure authentication with Werkzeug password hashing
- Manager-only role-based access control
- Create tasks using Employee ID, Name, and Title
- Real-time toggle between Pending and Completed status
- One-click task deletion
- Live dashboard with status badges and counters (Total, Completed, Pending)
- Advanced UI/UX:
  - Shooting meteors across screen
  - Glowing nebula background
  - Twinkling animated stars
  - Pulsing glowing Submit button
  - Color-matched glowing action buttons
  - Multi-theme switcher: Dark, Light, Purple, Ocean
  - Search bar for quick task filtering
- Fully responsive and mobile-friendly interface
- Cloud-hosted MySQL database for reliable data persistence

## 🛠️ Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Python, Flask
- **Database**: MySQL (Railway)
- **Authentication**: Werkzeug
- **Deployment**: Railway (primary), Vercel (frontend alternative)

## 📂 Project Structure

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


## 🚀 Local Setup
1. Clone: `git clone https://github.com/rishabh-397/task-management-app.git`
2. Create DB: `mysql -u root -p < database/schema.sql`
3. Update DB credentials in `app.py`
4. `pip install -r requirements.txt`
5. `python app.py`
6. Visit `http://127.0.0.1:5000`

## 📡 API Endpoints
- `GET /api/tasks` – Retrieve tasks
- `POST /api/tasks` – Create task
- `PATCH /api/tasks/<id>` – Toggle status
- `DELETE /api/tasks/<id>` – Delete task

## Deployment
- **Primary**: Railway (full-stack + MySQL)
- **Frontend Alternative**: Vercel

## License
MIT License

## Author
Rishabh Chaturvedi  
[GitHub](https://github.com/rishabh-397) | [LinkedIn](https://www.linkedin.com/in/rishabh-chaturvedi-21212728a)
