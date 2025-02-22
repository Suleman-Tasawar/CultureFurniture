# Furniture E-Commerce Web Application

## Project Overview

This is a responsive eCommerce web application built with React, Tailwind CSS, and Mirage JS (fake server). The application allows users to browse various categories of furniture, including beds, sofas, closets, racks, and more. Users can filter and explore furniture items in each category, view detailed information, and simulate the checkout process.

## Features

- **Product Categories**: Browse different categories of furniture (e.g., Beds, Sofas, Closets, Racks).
- **Responsive Design**: Fully responsive design built with Tailwind CSS to ensure a smooth experience on all devices.
- **Fake Server with Mirage JS**: Mirage JS is used to simulate backend responses for product data, simulating a real eCommerce store environment.
- **Product Details**: View detailed information about individual furniture items, including images, descriptions, and prices.
- **Add to Cart**: Add products to the shopping cart and simulate the checkout experience.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework to style the application.
- **Mirage JS**: Fake server to simulate backend APIs for products and categories.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/furniture-ecommerce.git
   ```

2. Navigate to the project directory:

   ```bash
   cd furniture-ecommerce
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Folder Structure

```
furniture-ecommerce/
│
├── public/                 # Public files
├── src/                    # Source files
│   ├── components/         # React components (Navbar, ProductCard, etc.)
│   ├── pages/              # Pages of the application (Home, ProductDetail, Cart, etc.)
│   ├── server.js           # Mirage JS configuration for the fake server
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── tailwind.config.js  # Tailwind CSS configuration
│
├── package.json            # Project metadata and dependencies
└── README.md               # This file
```

## Mirage JS Setup

Mirage JS is used to simulate backend APIs for products. It mimics the behavior of a real backend server by responding to network requests with mock data.

- In `src/services/index.js`, the Mirage JS server is set up to handle various requests, such as fetching products by category and adding items to the cart.

## Run in Production

To build and run the application in production mode:

1. Build the app:

   ```bash
   npm run build
   ```

2. Serve the production build using a static server (e.g., `serve`):

   ```bash
   npm install -g serve
   serve -s build
   ```

   Your application will be available at `http://localhost:5000`.

## Contributing

If you want to contribute to this project, feel free to fork the repository and create a pull request. Please ensure that your code follows the project’s conventions and passes the tests.

