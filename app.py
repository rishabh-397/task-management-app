import os
import pymysql
from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

app = Flask(__name__)
app.secret_key = "taskapp2026secret"

manager_username = "rishabh"
manager_password = "rishabh@2026"

valid_tasks = {"Group Discussion", "Meeting", "Report Submission"}


def get_connection():
    return pymysql.connect(
        host=os.environ.get("DB_HOST", "localhost"),
        user=os.environ.get("DB_USER", "root"),
        password=os.environ.get("DB_PASSWORD", "your_mysql_password"),
        database=os.environ.get("DB_NAME", "task_management_db"),
        port=int(os.environ.get("DB_PORT", "3306")),
        cursorclass=pymysql.cursors.DictCursor,
        ssl_disabled=True
    )


def setup_manager():
    try:
        conn = get_connection()
        with conn.cursor() as cursor:
            cursor.execute("SELECT id FROM login WHERE username = %s", (manager_username,))
            if cursor.fetchone() is None:
                hashed = generate_password_hash(manager_password)
                cursor.execute(
                    "INSERT INTO login (username, password, role) VALUES (%s, %s, %s)",
                    (manager_username, hashed, "manager"),
                )
        conn.commit()
        conn.close()
    except Exception as e:
        print(f"setup_manager error: {e}")


def login_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if not session.get("manager_id"):
            return redirect(url_for("login"))
        return f(*args, **kwargs)
    return wrapper


@app.route("/")
def index():
    if session.get("manager_id"):
        return redirect(url_for("dashboard"))
    return redirect(url_for("login"))


@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("username", "").strip()
        password = request.form.get("password", "")

        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM login WHERE username = %s", (username,))
                user = cursor.fetchone()
            conn.close()
        except Exception as e:
            return render_template("login.html", error=f"Database error: {e}")

        if user and user["role"] == "manager" and check_password_hash(user["password"], password):
            session["manager_id"] = user["id"]
            session["username"] = user["username"]
            return redirect(url_for("dashboard"))
        elif user and user["role"] != "manager":
            error = "Only manager can login"
        else:
            error = "Invalid username or password"

    return render_template("login.html", error=error)


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))


@app.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html", username=session.get("username"))


@app.route("/api/tasks", methods=["GET"])
@login_required
def get_tasks():
    try:
        conn = get_connection()
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM task_management ORDER BY id DESC")
            tasks = cursor.fetchall()
        conn.close()
        return jsonify({"success": True, "tasks": tasks})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route("/api/tasks", methods=["POST"])
@login_required
def add_task():
    data = request.get_json(silent=True) or request.form
    emp_id = (data.get("emp_id") or "").strip()
    employee_name = (data.get("employee_name") or "").strip()
    task_title = (data.get("task_title") or "").strip()
    completed = str(data.get("completed")).lower() == "true"

    if not emp_id:
        return jsonify({"success": False, "message": "Employee ID is required"}), 400
    if not employee_name:
        return jsonify({"success": False, "message": "Employee name is required"}), 400
    if task_title not in valid_tasks:
        return jsonify({"success": False, "message": "Invalid task title"}), 400

    try:
        conn = get_connection()
        with conn.cursor() as cursor:
            cursor.execute(
                "INSERT INTO task_management (emp_id, employee_name, task_title, completed) VALUES (%s, %s, %s, %s)",
                (emp_id, employee_name, task_title, completed),
            )
        conn.commit()
        conn.close()
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route("/api/tasks/<int:task_id>", methods=["PATCH"])
@login_required
def update_task(task_id):
    data = request.get_json(silent=True) or {}
    completed = str(data.get("completed")).lower() == "true"

    try:
        conn = get_connection()
        with conn.cursor() as cursor:
            cursor.execute("UPDATE task_management SET completed = %s WHERE id = %s", (completed, task_id))
        conn.commit()
        conn.close()
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
@login_required
def delete_task(task_id):
    try:
        conn = get_connection()
        with conn.cursor() as cursor:
            cursor.execute("DELETE FROM task_management WHERE id = %s", (task_id,))
        conn.commit()
        conn.close()
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


if __name__ == "__main__":
    setup_manager()
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)