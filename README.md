# MINILEMON SKILL TEST

## Overview

This project is a skill test for creating a CRUD application using Node.js, Express, MongoDB, and Docker. The application includes basic API functionalities for managing users.

---

## Features

- Create, Read, Update, and Delete (CRUD) operations for User management.
- Environment variable encryption/decryption.
- Dockerized setup for easy deployment.
- GitHub Actions CI/CD integration.

---

## Prerequisites

- Node.js v22.13.0
- MongoDB v7.0.7
- Docker and Docker Compose (for containerized setup)

---

## Installation and Usage

### 1. Local Setup (Without Docker)

#### Step 1: Clone the repository

```bash
git clone https://github.com/your-repo/minilemon-skill-test.git
cd minilemon-skill-test
```

#### Step 2: Install dependencies

```bash
npm install
```

#### Step 3: Set up environment variables

Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI=mongodb://localhost:27017/minilemon
NODE_ENV=development
PORT=3000
```

#### Step 4: Run the application

Start the MongoDB service locally and then run:

```bash
npm start
```

The application will run on `http://localhost:3000`.

---

### 2. Dockerized Setup

#### Step 1: Build and start the services

```bash
docker-compose up --build
```

#### Step 2: Access the application

The application will run on `http://localhost:3000`. MongoDB is exposed on `localhost:27017`.

---

## API Documentation

### **Base URL**

`http://localhost:3000`

### **Endpoints**

#### 1. Create User

**POST** `/user/create`

- **Request Body:**

```json
{
  "email": "user@email.com",
  "name": "John Doe",
  "telp": "1234567890",
  "status": true,
  "department": "Engineering"
}
```

- **Response:**
  - **201:** Data created successfully.
  - **400:** Missing fields or validation errors.
  - **500:** Internal server eror.

#### 2. Get All Users

**GET** `/user/get`

- **Response:**
  - **200:** List of all users.
  - **404:** No users found.
  - **500:** Internal server eror.

#### 3. Update User

**PUT** `/user/update/:id`

- **Request Body:**

```json
{
  "email": "Updated Email",
  "name": "Updated Name",
  "telp": "Updated Telp",
  "status": true/false,
  "department": "Updated Department",
}
```

- **Response:**
  - **200:** Data updated successfully.
  - **404:** Data not found.
  - **500:** Internal server eror.

#### 4. Delete User

**DELETE** `/user/delte/:id`

- **Response:**
  - **200:** Data deleted successfully.
  - **404:** Data not found.
  - **500:** Internal server eror.

---

## Running Tests

To run the test suite:

```bash
npm test
```

---

## CI/CD Integration

This project uses GitHub Actions for CI/CD. On every push to the `main` branch:

1. Tests are run.
2. Docker images are built and pushed to Docker Hub.
