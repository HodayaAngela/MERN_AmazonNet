# AmazoNet-MERN Project

![AmazoNet](/frontend/public/assets/images/‏‏AmazoNet.png)

## Introduction

The Online Shopping Site offers a seamless online shopping experience using the MERN stack (MongoDB, ExpressJS, React, and Node.js). It provides users with a user-friendly interface, secure payment options, and a diverse selection of products, ensuring convenience, speed, and affordability for all shoppers.

## Technologies

### client side

- react: 18.2.0
- react-router-dom: 6.10.0
- axios: 1.4.0
- react-bootstrap: 2.7.4
- react-router-bootstrap: 0.26.2
- react-helmet-async: 1.3.0
- react-toastify: 9.1.3
- @paypal/react-paypal-js: 8.0.0
- react-google-charts: 4.0.0

### server side

- express: 4.18.2
- nodemon: 2.0.22
- mongoose: 7.2.1
- dotenv: 16.0.3
- bcryptjs: 2.4.3
- express-async-handler: 1.2.0
- jsonwebtoken: 9.0.0
- nodemailer: 6.9.4
- joi: 17.9.2

### server side

## Installation

1. Create .env File:

- Duplicate '.env.example' in 'backend' folder and rename it to: '.env'

2. Setup MongoDB:

- I have provided a separate link to an existing MongoDB Atlas. Please update the .env file with the provided link.

3. Run Backend:

```

cd backend
npm i
npm start

```

4.  Run Frontend:

```

# open new terminal

cd frontend
npm i
npm start

```

## User Types and Their Permitted Actions:

1. Guest User (Not Logged In):

- Can browse products available in the application.
- Can add products to the shopping cart.
- When they wish to proceed to checkout, they will be required to log in or create an account.

## 2. Regular User:

email: user@example.com
password: 123456

- All capabilities of a guest user.
- Can log in.
- Can manage their profile information.
- Can complete purchases and make payments.
- Can view past order history.
- Can manage their shopping cart.

## 3. Admin:

email: admin@example.com
password: 123456

- Possesses all the privileges of a regular user.
- Can manage product listings (add, edit, delete products).
- Can manage user accounts (view, update, or delete accounts).
- Has access to administrative features to monitor and control the application's overall functionality.
