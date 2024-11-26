First encure you are inside the project directory if not then first do that by 
cd real-time-comments-system
# Real-Time Comments System

This is a real-time comments system where users can post comments and see them instantly.

## Frontend Setup

1. **Clone the repository:**
   First, clone the repository using the following command:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

3. **Install dependencies:**

   Run the following command to install all the required frontend dependencies:

   ```bash
   npm install
   ```

4. **Run the frontend app:**

   Start the frontend development server by running:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:3000` (or whichever port is specified).

---

## Backend Setup

1. **Open a new terminal window** and navigate to your backend directory:

   ```bash
   cd backend
   ```

2. **Create a `.env` file** to save your credentials:
   
   In the backend directory, create a `.env` file with the following contents:

   ```dotenv
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD="your-mongodb-password"  # Replace this with your actual MongoDB password
   DB_NAME=comments_db
   ```

3. **Set up MongoDB:**

   Ensure you have MongoDB installed and running on your system. If you don't have it installed, follow the instructions at [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

4. **MySQL Setup (for comments storage):**

   In the same terminal, set up the database for storing comments:

   - Open Command Prompt or your terminal and run:

     ```bash
     mysql -u root -p
     ```

   - Enter your MySQL root password and then run the following commands to create the `comments_db` database and the `comments` table:

     ```sql
     USE comments_db;
     CREATE TABLE comments (
         id INT AUTO_INCREMENT PRIMARY KEY,
         username VARCHAR(255),
         comment TEXT,
         timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
     );
     ```

5. **Install MySQL dependency:**

   If you haven't already, install the `mysql2` package by running:

   ```bash
   npm install mysql2
   ```

6. **Run the backend server:**

   After installing the necessary dependencies, start the backend server:

   ```bash
   node index.js
   ```

The backend server should now be running and connected to the database.

---

## Final Notes

Once both the frontend and backend servers are running, your real-time comments system should be ready to use on your local machine.

Feel free to modify the database settings and credentials as needed.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Summary of Changes:
1. **Frontend Setup**: Detailed steps on cloning the repo, setting up, and running the frontend project.
2. **Backend Setup**: Includes creating the `.env` file, setting up the database, and running the backend server.
3. **MySQL Setup**: Added steps to create the database and table.
4. **Dependencies**: Includes necessary `npm install` commands for MySQL.

### To Use:
1. Replace `<repository-url>` with the actual URL of your repository (e.g., `https://github.com/shruti380/real-time-comments-system.git`).
2. Follow the instructions under **Frontend Setup** and **Backend Setup** to get the project running locally.

Let me know if you need further edits or clarifications!
