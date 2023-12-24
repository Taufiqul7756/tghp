# TG HodgePodge Website

Welcome to the TG HodgePodge website, a Next.js project that combines a blog and an online shop. This platform allows users to explore blogs and products without logging in, but requires registration or login for making purchases. The project utilizes MongoDB with Prisma, Google Cloud Console for authentication, Firebase for storing product images, and Stripe as the payment gateway. JWT tokens are employed for secure user authentication.

## Features

### For Users:

1. **Authentication:**
   - Users can sign up and log in through Google Cloud Console.
   - Registered users can access additional features like adding products to the cart.

2. **Browsing:**
   - Users can read blogs and browse products without the need to log in.

3. **Shopping Cart:**
   - Users can select products, add them to the cart, and proceed to checkout.
   - The shopping cart displays selected items and allows users to adjust quantities.

4. **Payment Gateway:**
   - Stripe is integrated for secure and seamless online payments.

### For Admin:

1. **Dashboard:**
   - Overview of order summaries, total users, total earnings, unpaid and paid amounts, etc.

2. **Add Products:**
   - Admin can add new products by providing details such as title, brand name, stock, product color, reviews, etc.

3. **Manage Products:**
   - View all products with options to manage stock, mark as out of stock, delete, and view product details.

4. **Manage Orders:**
   - Monitor the number of orders, view pending orders, and manage order statuses (dispatched, delivered).
   - Access detailed order information.

## Tech Stack

- **Frontend:**
  - Next.js

- **Backend:**
  - MongoDB with Prisma
  - Firebase for image storage

- **Authentication:**
  - Google Cloud Console

- **Payment Gateway:**
  - Stripe

- **Authorization:**
  - JWT tokens

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/TG-HodgePodge-Website.git
