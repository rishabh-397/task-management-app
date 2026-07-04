-- ============================================================
-- Task Management App - Database Schema (MySQL)
-- ============================================================

CREATE DATABASE IF NOT EXISTS task_management_db;
USE task_management_db;

-- ------------------------------------------------------------
-- Table 1: login
-- ------------------------------------------------------------
DROP TABLE IF EXISTS login;
CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('manager', 'admin') NOT NULL DEFAULT 'manager',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Table 2: task_management
-- ------------------------------------------------------------
DROP TABLE IF EXISTS task_management;
CREATE TABLE task_management (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id VARCHAR(20) NOT NULL,
    employee_name VARCHAR(100) NOT NULL,
    task_title VARCHAR(50) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Sample tasks
-- ------------------------------------------------------------
INSERT INTO task_management (emp_id, employee_name, task_title, completed) VALUES
('E101', 'Ravi Kumar', 'Group Discussion', FALSE),
('E102', 'Anita Sharma', 'Meeting', TRUE),
('E103', 'John Mathew', 'Report Submission', FALSE);