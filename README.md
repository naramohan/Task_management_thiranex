# Task Management Application

## Overview

Task Management Application is a full-stack web application that allows users to register, log in, create tasks, view tasks, and manage their daily activities efficiently.

The project is built using:

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MySQL

---

## Features

### User Authentication

* User Registration
* User Login
* Basic Authentication Validation

### Task Management

* Create New Tasks
* View Existing Tasks
* Delete Tasks
* Track Task Status
* Set Due Dates

### Responsive Design

* Works on desktop and mobile devices
* Simple and user-friendly interface

---

## Project Structure

task-manager/

├── public/

│   ├── index.html

│   ├── login.html

│   ├── register.html

│   ├── dashboard.html

│   ├── style.css

│   └── script.js

├── server.js

├── db.js

├── package.json

└── taskmanager.sql

---

## Database Tables

### Users Table

* id
* name
* email
* password

### Tasks Table

* id
* title
* description
* status
* due_date
* user_id

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Database

1. Open MySQL Workbench.
2. Create the database using `taskmanager.sql`.
3. Update database credentials in `db.js`.

### Run Application

```bash
node server.js
```

Open:

http://localhost:5000

---

## API Endpoints

### Authentication

* POST /register
* POST /login

### Tasks

* GET /tasks
* POST /tasks
* DELETE /tasks/:id

---

## Future Enhancements

* Edit and Update Tasks
* Password Encryption
* JWT Authentication
* Task Filtering
* Real-Time Updates using WebSockets
* Dark Mode Support

---

## Author

**Madhumitha R**

Computer Science Engineering Student

Interested in Full Stack Development, Java Programming, Web Technologies, and Database Management Systems.
