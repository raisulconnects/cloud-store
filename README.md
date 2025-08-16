# Cloud Store

## Description

Cloud Store is a simple e-commerce application built using the modern React ecosystem. It allows users to browse products, add and remove items from their cart, and supports role-based functionality — admin users can add and delete products.  
This project was created as part of my learning journey and helped me understand how Redux Toolkit, RTK Query and Firebase (especially Firestore) work together in a real application. While the Firebase integration was challenging at first, working through the documentation made it much easier over time.

## Features

(Authentication state is managed globally using React Context API)

- User authentication (Firebase Auth)
- Role-based access (Admin / User)
- Browse product list (stored in Firestore)
- Add product to cart
- Remove product from cart
- Admin: Add product
- Admin: Delete product

## Tech Stack

- Tailwind CSS
- React
- Redux Toolkit
- RTK Query
- Firebase Auth
- Firestore
- Cloudinary
- Daisy UI
- React Toastify

## Future Improvements

- User profile page
- Order history
- Product search / filtering

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/cloud-store.git
cd cloud-store
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env` file and add your Firebase / Cloudinary keys:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_CLOUDINARY_CLOUD_NAME=...
VITE_CLOUDINARY_UPLOAD_PRESET=...
```

4. **Start the development server**

```bash
npm run dev
```
