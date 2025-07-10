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
  - [User Authentication](#user-authentication)
  - [Blog Posts](#blog-posts)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete blog posts
- Password hashing for enhanced security
- Responsive Angular UI

---

## Tech Stack

- **Frontend:** Angular, TypeScript, HTML, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt

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

1. **Navigate to the backend folder:**
   ```bash
   cd BlogApplicationBackend
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   * Create a `.env` or `config.env` file in the root of `BlogApplicationBackend` with the following content:

     ```env
     PORT=4000
     DB_URL=your_mongodb_connection_string
     JWT_SECRET=yourSuperSecretKey
     JWT_EXPIRATION=1h
     ```

4. **Start the backend server:**

   ```bash
   npm run dev
   ```

   The server will run at `http://localhost:4000`.

---

### Frontend Setup

1. **Navigate to the frontend folder:**

   ```bash
   cd BlogApplicationFrontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the Angular development server:**

   ```bash
   ng serve
   ```

   The frontend will be available at `http://localhost:4200`.

---

## API Endpoints

### User Authentication

* **Register:** `POST /api/users/register`

  * **Request Body:**

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

  * **Request Body:**

    ```json
    {
      "email": "test@example.com",
      "password": "yourPassword123"
    }
    ```

### Blog Posts

* **Get all posts:** `GET /api/posts`
* **Get single post:** `GET /api/posts/:id`
* **Create a post:** `POST /api/posts` *(requires JWT)*
* **Update a post:** `PUT /api/posts/:id` *(requires JWT)*
* **Delete a post:** `DELETE /api/posts/:id` *(requires JWT)*

---

## Environment Variables

Example `config.env` or `.env` for the backend:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
JWT_SECRET=yourSuperSecretKey
JWT_EXPIRATION=1h
```

---

## License

This project is licensed under the MIT License.

```

### ✅ Key Improvements:
- Fixed markdown indentation and spacing issues.
- Corrected headings and added missing subheadings in the Table of Contents.
- Ensured consistent formatting for code blocks and shell commands.
- Used `.env` or `config.env` appropriately depending on naming conventions.

Let me know if you also want badges, contributor sections, or deployment instructions added!
```
