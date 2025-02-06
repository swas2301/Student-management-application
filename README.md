# Student Management System

## 📌 Project Overview
The **Student Management System** is a full-stack web application built with **Spring Boot** for the backend and **React** for the frontend. It allows users to perform CRUD (Create, Read, Update, Delete) operations on student records.

## ✨ Features
- 📌 **Add a new student** with name, age, class, and phone number.
- 📌 **View all student records**.
- 📌 **Search students** by name.
- 📌 **Update student details**.
- 📌 **Delete student records**.

---

## 🛠 Tech Stack
### **Backend (Spring Boot)**
- Java & Spring Boot
- Spring Data JPA (Hibernate)
- MySQL Database
- RESTful APIs
- Maven

### **Frontend (React)**
- React.js
- Axios (API Calls)
- Bootstrap (Styling)
- React Router

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
# Clone the repo
git clone https://github.com/swas2301/student-management.git
```

### **2️⃣ Backend Setup (Spring Boot)**
1. **Configure MySQL Database**
   - Update `src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/student_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
2. **Build and Run the Application**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### **3️⃣ Frontend Setup (React)**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---



