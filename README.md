
# Task Manager

A full-stack task management application with an Angular frontend and a Node.js/Express/MongoDB backend.  
        
## Features
     
- User registration and login    
- Dashboard for uploading and downloading Excel files   
- Responsive UI with Angular
- RESTful API for managing user data (MongoDB)      
     
## Project Structure    

```
tasks/           # Angular frontend
tasks-backend/   # Node.js backend
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB

### Backend Setup

1. Go to the backend folder:
    ```sh
    cd tasks-backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file (already present) and set your MongoDB URI and port if needed.
4. Start the backend server:
    ```sh
    node server.js
    ```
   The backend runs on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Go to the frontend folder:
    ```sh
    cd tasks
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the Angular development server:
    ```sh
    npm start
    ```
   The frontend runs on [http://localhost:4200](http://localhost:4200).

## Usage

- Register a new user or log in with existing credentials.
- Access the dashboard to upload/download Excel files.

## Development

- Angular CLI commands are available for building, testing, and serving the frontend.
- The backend uses Express and Mongoose for REST API and MongoDB integration.

## License

This project is licensed under the MIT License .
