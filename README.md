Xeno CRM – Server

This is the backend server for my Mini CRM project, built as part of the Xeno SDE Internship Assignment 2025.
It powers the CRM system by handling authentication, APIs, database operations, and campaign logic.

 Tech Stack

Node.js + Express – Backend framework

MongoDB Atlas (xeno-crm) – Database

Mongoose – ODM for MongoDB

Passport.js (Google OAuth 2.0) – Authentication

Postman – API testing

 Features

Authentication → Google OAuth 2.0 login

Shops API → Create and view shops (used in frontend)

Customers API → Add, fetch, delete customers (tested via Postman)

Orders API → Add, fetch, delete orders (tested via Postman)

Campaign Logs → Backend ready to log campaigns and delivery results

MongoDB Atlas Integration → All data stored in xeno-crm database

 API Endpoints
Shops

POST /api/shops → Create a new shop

GET /api/shops → Get all shops

Customers

POST /api/customers → Add a new customer

GET /api/customers → Fetch all customers

DELETE /api/customers/:id → Delete a customer

Orders

POST /api/orders → Add a new order

GET /api/orders → Fetch all orders

DELETE /api/orders/:id → Delete an order

 Setup Instructions

Clone the repo:

git clone https://github.com/gkismat/xeno-crm-server.git
cd xeno-crm-server


Install dependencies:

npm install


Create a .env file in the root:

MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/xeno-crm"
SESSION_SECRET="xeno-secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"


Run the server:

npm start


Server will run at http://localhost:5000

 Notes

Shops UI is implemented in the frontend repo (Vercel).

Customers and Orders are tested through Postman and visible in MongoDB Atlas.

.env file is not included for security reasons – use .env.example as a reference.

Related Links

Frontend (Vercel) → https://crm-frontend-opal-nine.vercel.app/

Frontend Repo → https://github.com/gkismat/xeno-crm-client
Youtube Link https://www.youtube.com/watch?v=Bl4lhhPcTZk
