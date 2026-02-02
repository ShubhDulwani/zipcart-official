# 🛒 ZIPCART — Full-Stack E-Commerce Web Application

ZIPCART is a full-stack e-commerce web application built using Node.js, Express.js, MongoDB, and Vanilla JavaScript.  
The project implements core e-commerce functionalities such as authentication, product listing, and shopping cart management.

---

## 🚀 Features

- User authentication (Signup & Login)
- Product listing and product details
- Shopping cart (Add / Remove items)
- RESTful API architecture
- MongoDB database integration
- Dynamic frontend using Vanilla JavaScript

---

## 🧠 Project Objective

The objective of ZIPCART is to understand and implement real-world e-commerce workflows, focusing on backend API design, database modeling, and frontend-backend integration.

---

## ⚙️ Technology Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools
- Git
- Postman
- VS Code

---

## 📂 Project Structure

zipcart-official/
│
├── public/ # Static assets (CSS, JS, Images)
├── views/ # Frontend pages
├── routes/ # Express route handlers
├── controllers/ # Business logic
├── models/ # MongoDB schemas
├── config/ # Database & environment config
├── app.js # App entry point
├── package.json
└── README.md


---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/ShubhDulwani/zipcart-official.git
cd zipcart-official
2. Install dependencies
npm install
3. Configure environment variables
Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
PORT=3000
4. Run the application
npm start
The application will run at:

http://localhost:3000
📬 API Endpoints (Sample)
POST /auth/register — User registration

POST /auth/login — User login

GET /products — Fetch all products

POST /cart/add — Add item to cart

DELETE /cart/remove — Remove item from cart

📈 Future Improvements
Payment gateway integration

Admin dashboard for product management

Order history and tracking

Product search and filters

👤 Author
Shubh Dulwani
Computer Science Engineer | Full-Stack Developer
