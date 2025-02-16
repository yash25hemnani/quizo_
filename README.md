# **Quizo - Quiz Management System**  

A full-stack web application built with **React (Vite) for the frontend**, **Express + Node.js (TypeScript) for the backend**, and **MySQL Workbench** as the database. The app performs basic authentication as well as allows us to Create, Read, Update and Delete Quizzes.

---

## **🚀 Getting Started**  

### **📌 Prerequisites**  
Ensure you have the following installed on your system:  

- [Node.js (LTS)](https://nodejs.org/)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [MySQL Workbench](https://www.mysql.com/products/workbench/)  

---

## **🖥️ Setting Up the Backend (Express + Node.js + TypeScript)**  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Navigate to the backend folder**  
   ```bash
   cd backend
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the `backend` directory and add the following:  
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   ```

5. **Start the backend server**  
   ```bash
   npm run dev
   ```
   The backend will run at **`http://localhost:5000`**.

---

## **🌐 Setting Up the Frontend (React + Vite)**  

1. **Navigate to the frontend folder**  
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the frontend**  
   ```bash
   npm run dev
   ```
   The frontend will run at **`http://localhost:5173`**.

---

## **🔌 Connecting Frontend and Backend**  
Ensure both servers are running:  
- **Backend:** `http://localhost:5000`  
- **Frontend:** `http://localhost:5173`  

Your React frontend will now communicate with the Express backend via the **API URL** set in `.env`.

---

## **🗄️ Setting Up the Database (MySQL Workbench)**  

1. Open **MySQL Workbench** and connect to your MySQL server.  
2. Open the `database` folder in the project.  
3. Inside the `database` folder, you will find `.sql` files:  
   - **`schema.sql`** → Contains table structures   
4. **Import the database schema** by running:  
   ```sql
   SOURCE /path/to/your-repo/database/schema.sql;
   ```
5. Verify that the tables and data are successfully created using:  
   ```sql
   SHOW TABLES;
   ```

## **📂 Project Structure**  
```
/your-repo
│── /backend       # Express + Node.js (TypeScript) server
│── /frontend      # React (Vite) frontend
│── /database      # MySQL Workbench setup files (if any)
│── README.md      # Project setup instructions
```

---

## **✅ Running the Full Project**  
1. Open **two terminals**.  
2. Run the backend (`npm run dev` inside `/backend`).  
3. Run the frontend (`npm run dev` inside `/frontend`).  

## **API Documentation**
Link: [https://github.com/yash25hemnani/quizo_/documentation.md](https://github.com/yash25hemnani/quizo_/blob/main/documentation.md)

🚀 **Your project should be up and running!**
