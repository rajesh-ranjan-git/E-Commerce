# GetKart

Welcome to GetKart! This is an e-commerce web application built with React and Vite, showcasing a broad range of modern React patterns alongside authentication, cart, and product-browsing functionality.

## Live URL : https://get-kart.netlify.app

```bash
https://get-kart.netlify.app
```

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Author](#author)

## Project Overview

GetKart is a React + Vite e-commerce front end. Users can browse a product catalog, search, filter, and sort products, add items to a cart, and sign up / log in via a JWT-authenticated backend. Product data is sourced from DummyJSON, while user accounts are handled by a separate Node.js/Express/MongoDB backend deployed on Render.

## Features

- **Product Catalog:** Browse products with Search Bar, Filtering, and Sorting.
- **Shimmer UI:** Loading skeletons while data is being fetched.
- **Cart Management:** Add products to a cart and review them before checkout.
- **Authentication:** Sign up / log in flow using JWT tokens stored in cookies.
- **Form Validation:** Validated forms via Formik and Yup.
- **State Management:** Redux Toolkit alongside Context API for shared state.
- **Routing:** Dynamic routing with React Router, including protected/auth-wrapped routes.
- **Reusable Patterns:** Custom Hooks, Higher Order Components, Lazy Loading, Controlled/Uncontrolled components (e.g. accordion), and state lifting.

> Note: the backend is deployed separately on Render.com's free tier, so the initial API request after inactivity can take up to ~30 seconds to respond.

## Tech Stack

- **Frontend:** React, Vite, JSX, Tailwind CSS, DaisyUI, Remix Icons
- **State Management:** Redux Toolkit, React Redux, Context API
- **Forms/Validation:** Formik, Yup
- **HTTP Client:** Axios
- **Auth:** JSON Web Tokens (JWT), cookies, Bcrypt (backend password hashing)
- **Data Source:** [DummyJSON](https://dummyjson.com/) product catalog
- **Backend (separate service):** Node.js, Express, MongoDB/Mongoose — deployed on Render.com

## Folder Structure

```bash
GetKart/
├── public/            # Static public assets
├── src/
│   ├── assets/         # Images/logo used in the app
│   ├── utils/          # Store, validation schema, and helper hooks
│   ├── App.jsx         # Root application component
│   ├── AuthWrapper.jsx  # Route auth-guard wrapper
│   ├── Cart.jsx         # Cart page
│   ├── CartRow.jsx      # Individual cart line item
│   ├── FoodApp.jsx      # App layout/shell
│   ├── Home.jsx         # Product listing page
│   ├── Login.jsx        # Login page
│   ├── SignUp.jsx       # Sign-up page
│   ├── Profile.jsx      # User profile page
│   ├── ProductCard.jsx  # Product card component
│   ├── SingleProductPage.jsx  # Product details page
│   ├── ShimmerUI.jsx    # Loading skeleton component
│   └── main.jsx         # App entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Installation Guide

### Prerequisites

- Node.js (v16 or later)
- npm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rajesh-ranjan-git/GetKart.git
   cd GetKart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The app should now be running at the local URL printed by Vite (typically http://localhost:5173).

## Usage Instructions

1. Browse the product catalog on the home page, using search, filters, and sorting.
2. Sign up or log in to your account.
3. Add products to your cart and review them from the cart page.
4. View individual product details on the product page.

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite development server     |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint over the project           |

## Deployment

The frontend is deployed on Netlify at https://get-kart.netlify.app, and communicates with a separately deployed backend service hosted on Render.com.

## Author

- **Rajesh Ranjan** — [GitHub @rajesh-ranjan-git](https://github.com/rajesh-ranjan-git)

---
