# EasyWear E-Commerce Platform

A modern, full-stack e-commerce application for clothing retail with React frontend and Node.js backend.

## 🚀 Technology Stack

### Frontend
- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **State Management**: Redux Toolkit + RTK Query
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Custom component library
- **Icons**: Lucide React

### Backend
- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt
- **Validation**: Zod Schema Validation
- **Error Handling**: Custom error middleware
- **Security**: Helmet, CORS

## ✨ Features

### Customer Features
- **User Authentication**
  - User registration and login
  - JWT-based authentication with refresh tokens
  - Persistent login state

- **Product Browsing**
  - Browse products by category (Men, Women, Kids)
  - Filter and sort products
  - Search functionality
  - Responsive product grid

- **Shopping Experience**
  - Detailed product pages with multiple images
  - Size and color selection
  - Shopping cart functionality (logged in and guest users)
  - Checkout process

- **User Account**
  - Order history
  - Address management
  - Profile settings

### Admin Features
- **Dashboard**
  - Sales overview
  - Recent orders
  - Inventory status

- **Product Management**
  - Add/edit/delete products
  - Manage product categories
  - Upload product images

- **Order Management**
  - View and process orders
  - Update order status
  - Generate invoices

- **Customer Management**
  - View customer information
  - Customer order history

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or yarn package manager
- MongoDB installation or MongoDB Atlas account

### Environment Variables

Create the following `.env` files:

#### Backend (in Backend/.env):
```
PORT=5000
DATABASE_URL=your_mongodb_connection_string
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
JWT_REFRESH_EXPIRES_IN=7d

# Bcrypt
BCRYPT_SALT_ROUNDS=12

# Email (for notifications)
ADMIN_EMAIL=your_email@example.com
ADMIN_EMAIL_AUTH_PASSWORD=your_email_app_password

# AI Integration (optional)
GEMINI_API_KEY=your_gemini_api_key
```

#### Frontend (in Frontend/.env):
```
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_PUBLIC_URL=http://localhost:5173
VITE_NODE_ENV=development
```

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Ecommerce
   ```

2. Install all dependencies:
   ```bash
   npm run install:all
   ```

3. Start both frontend and backend in development mode:
   ```bash
   npm start
   ```

4. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api/v1

### Running Separately

If you want to run the frontend or backend separately:

**Frontend only:**
```bash
npm run start:frontend
```

**Backend only:**
```bash
npm run start:backend
```

## 📋 API Endpoints

### Authentication
- `POST /api/v1/auth/create-user` - Register a new user
- `POST /api/v1/auth/login` - Authenticate user
- `POST /api/v1/auth/refresh-token` - Refresh access token

### Products
- `GET /api/v1/product` - Get all products with filtering
- `GET /api/v1/product/:id` - Get a specific product
- `POST /api/v1/product/create-product` - Create a new product (admin)
- `PUT /api/v1/product/:id` - Update a product (admin)
- `DELETE /api/v1/product/:id` - Delete a product (admin)

### Cart
- `GET /api/v1/cart/:email` - Get user's cart
- `POST /api/v1/cart/add-to-cart` - Add item to cart
- `PUT /api/v1/cart/update-cart` - Update cart item
- `DELETE /api/v1/cart/remove-from-cart/:id` - Remove item from cart

### Orders
- `GET /api/v1/order/:email` - Get user's orders
- `POST /api/v1/order/create-order` - Create a new order
- `GET /api/v1/order/:id` - Get order details
- `PUT /api/v1/order/:id` - Update order status (admin)

## 📁 Project Structure

```
Ecommerce/
├── Backend/                      # Backend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── config/           # Configuration files
│   │   │   ├── db/               # Database connection setup
│   │   │   ├── error/            # Custom error classes
│   │   │   ├── jobs/             # Scheduled tasks
│   │   │   ├── middleware/       # Express middlewares
│   │   │   ├── modules/          # Feature modules
│   │   │   │   ├── auth/         # Authentication module
│   │   │   │   ├── product/      # Product module
│   │   │   │   ├── cart/         # Cart module
│   │   │   │   ├── order/        # Order module
│   │   │   ├── routes/           # API routes
│   │   │   ├── utils/            # Utility functions
│   │   ├── app.ts                # Express application setup
│   │   ├── server.ts             # Server entry point
├── Frontend/                     # Frontend application
│   ├── public/                   # Static files
│   ├── src/
│   │   ├── assets/               # Images and assets
│   │   ├── components/           # Reusable components
│   │   ├── constants/            # Application constants
│   │   ├── features/             # Feature modules
│   │   │   ├── redux/            # Redux store setup
│   │   ├── hooks/                # Custom React hooks
│   │   ├── pages/                # Application pages
│   │   ├── types/                # TypeScript type definitions
│   │   ├── utils/                # Utility functions
│   │   ├── App.tsx               # Main application component
│   │   ├── main.tsx              # Application entry point
```

## 🧪 Testing

Run frontend tests:
```bash
npm run test:frontend
```

Run backend tests:
```bash
npm run test:backend
```

Run all tests:
```bash
npm run test
```

## 🏗️ Building for Production

Build both applications for production:
```bash
npm run build
```

This will generate:
- Frontend production files in the `Frontend/dist` directory
- Compiled backend files in the `Backend/dist` directory

## 📈 Roadmap

- Add wishlist functionality
- Implement product reviews and ratings
- Enhanced search with autocomplete
- Social media login integration
- Payment gateway integration (Stripe, PayPal)
- Real-time inventory management
- Email notifications for order status changes
- Analytics dashboard for admin

## 📄 License

ISC
