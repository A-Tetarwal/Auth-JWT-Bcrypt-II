### Auth-JWT-Bcrypt-II

## Overview

Auth-JWT-Bcrypt-II is a Node.js project that demonstrates user authentication using JSON Web Tokens (JWT) and password hashing with bcrypt. The project includes a simple Express server with routes for user signup, login, and logout, and uses EJS for templating.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/A-Tetarwal/Auth-JWT-Bcrypt-II.git
    cd Auth-JWT-Bcrypt-II
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the server:**
    ```sh
    node app.js
    ```

## Project Structure

```
Auth-JWT-Bcrypt-II
│
├── models
│   └── user.js           # User model definition
├── public
│   └── stylesheets
│       └── index.css     # CSS styles
├── views
│   ├── index.ejs         # Home page view
│   ├── login.ejs         # Login page view
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Usage

### Signup

- **Route:** `/signup`
- **Method:** `POST`
- **Description:** Creates a new user, hashes the password, and returns a JWT token.
- **Request Body:**
    ```json
    {
        "username": "your_username",
        "email": "your_email",
        "password": "your_password",
        "age": "your_age"
    }
    ```

### Login

- **Route:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a user, verifies the password, and returns a JWT token.
- **Request Body:**
    ```json
    {
        "email": "your_email",
        "password": "your_password"
    }
    ```

### Logout

- **Route:** `/logout`
- **Method:** `GET`
- **Description:** Logs out the user by clearing the JWT token cookie.
- **Request Body:** None

## Notes

- The JWT secret key should be stored in an environment variable for security.
- Proper error handling is implemented to provide meaningful feedback.
- The project uses EJS for server-side rendering of HTML views.


---

Feel free to modify this README according to your project's specific details and requirements.

## What is done?
```
create user account, 
    setup mongoose,
    schema,
    model,
    usercreate -> passwod -> hash,
    jwt token -> cookie,

    login -> token -> decrypt -> email
```