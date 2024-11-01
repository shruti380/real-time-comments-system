# Real-Time Comments System

A simple real-time comments system using Next.js, Node.js, MySQL, and Socket.IO.

## Features
- User can log in with a username
- Real-time comments updates using Socket.IO
- Responsive design with Material UI
- Stores comments in a MySQL database

## Project Structure
- **Frontend:** Next.js with Material UI
- **Backend:** Node.js and Express.js with MySQL
- **Real-time:** Socket.IO for instant comment broadcasting

## Prerequisites
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) installed
- [MySQL](https://www.mysql.com/) installed and running

## Setup

### Database Setup
1. Create a new MySQL database and run the following SQL to set up the `comments` table:

   ```sql
   CREATE TABLE comments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255),
      comment TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
   );
