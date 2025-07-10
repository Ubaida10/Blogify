```markdown
# Blogify

A full-stack blogging platform with user authentication, built using Angular (frontend), Node.js/Express (backend), and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

* User registration and login (JWT authentication)
* Create, read, update, and delete blog posts
* Secure password hashing
* Responsive Angular frontend

---

## Tech Stack

* **Frontend:** Angular, TypeScript, HTML, CSS
* **Backend:** Node.js, Express, JavaScript
* **Database:** MongoDB
* **Authentication:** JWT, bcrypt

---

## Project Structure

```

BlogApplication/
├── BlogApplicationBackend/
│   ├── Controller/
│   ├── Model/
│   ├── routes/
│   ├── config.env
│   ├── server.js
│   └── package.json
└── BlogApplicationFrontend/
├── src/
├── angular.json
└── package.json

````

---

## Getting Started

### Backend Setup

1.  **Navigate to backend folder:**

    ```bash
    cd BlogApplicationBackend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    * Create a `.env` file (or `config.env` if you prefer to keep that name as per your `dotenv` config) in the root of `BlogApplicationBackend`.
    * Add the following variables:

    ```
    PORT=4000
    DB_URL=your_mongodb_connection_string
    JWT_SECRET=yourSuperSecretKey
    JWT_EXPIRATION=1h
    ```

4.  **Start the backend server:**

    ```bash
    npm run dev
    ```

    The server will be running on `http://localhost:4000`.

### Frontend Setup

1.  **Navigate to frontend folder:**

    ```bash
    cd BlogApplicationFrontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the Angular app:**

    ```bash
    ng serve
    ```

    The app will be running on `http://localhost:4200`.

---

## API Endpoints

### User Authentication

* **Register:** `POST /api/users/register`
    * **Body:**

        ```json
        {
          "email": "test@example.com",
          "password": "yourPassword123",
          "firstName": "John",
          "lastName": "Doe",
          "dateOfBirth": "1990-01-01"
        }
        ```

* **Login:** `POST /api/users/login`
    * **Body:**

        ```json
        {
          "email": "test@example.com",
          "password": "yourPassword123"
        }
        ```

### Blog Posts

* **Get all posts:** `GET /api/blogs`
* **Get single post:** `GET /api/blogs/:id`
* **Create post:** `POST /api/blogs` (requires JWT authentication in headers: `Authorization: Bearer <token>`)
* **Update post:** `PUT /api/blogs/:id` (requires JWT authentication)
* **Delete post:** `DELETE /api/blogs/:id` (requires JWT authentication)

---

## Environment Variables

Your `config.env` (or `.env`) file in the `BlogApplicationBackend` directory should contain:

````

PORT=4000
DB\_URL=your\_mongodb\_connection\_string
JWT\_SECRET=yourSuperSecretKey
JWT\_EXPIRATION=1h

```

---

## License

This project is licensed under the MIT License.
```
