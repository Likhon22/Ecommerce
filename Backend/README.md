# EasyWear E-Commerce Backend

A robust, scalable Node.js backend for the EasyWear e-commerce platform built with Express, TypeScript, and MongoDB.

## 🚀 Technology Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt
- **API Documentation**: OpenAPI/Swagger
- **Validation**: Zod Schema Validation
- **Error Handling**: Custom error middleware
- **Rate Limiting**: Express rate limiter
- **Logging**: Custom development logger
- **Testing**: Jest
- **Security**: Helmet, CORS
- **Job Scheduling**: Node-schedule

## ✨ Features

### Authentication & Authorization

- Secure JWT-based authentication with access and refresh tokens
- Role-based authorization (admin/user)
- Password hashing with bcrypt
- Account management (registration, login)

### Product Management

- Create, read, update, and delete products
- Advanced filtering, sorting, and pagination
- Product categorization and search
- Product image upload and management

### Cart & Order Management

- Shopping cart functionality
- Order creation and management
- Order history and tracking
- Payment gateway integration (in progress)

### User Management

- User profile creation and management
- Address management
- Order history
- Wishlist functionality

### Admin Dashboard

- Product management
- Order management
- User management
- Analytics and reporting (in progress)

### API Features

- RESTful API design
- Rate limiting for API protection
- CORS enabled for cross-origin requests
- Error handling middleware
- Data validation middleware

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

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v18.x or later recommended)
- MongoDB installation or MongoDB Atlas account
- npm or yarn package manager

### Environment Variables

Create a `.env` file in the root directory with the following variables:

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

### Installation Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Ecommerce/Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

4. For production:
   ```bash
   npm run build
   npm run start:prod
   # or
   yarn build
   yarn start:prod
   ```

## 📁 Project Structure

```
Backend/
├── src/
│   ├── app/
│   │   ├── config/              # Configuration files
│   │   ├── db/                  # Database connection setup
│   │   ├── error/               # Custom error classes
│   │   ├── jobs/                # Scheduled tasks
│   │   ├── middleware/          # Express middlewares
│   │   ├── modules/             # Feature modules
│   │   │   ├── auth/            # Authentication module
│   │   │   ├── product/         # Product module
│   │   │   ├── cart/            # Cart module
│   │   │   ├── order/           # Order module
│   │   ├── routes/              # API routes
│   │   ├── utils/               # Utility functions
│   ├── app.ts                   # Express application setup
│   ├── server.ts                # Server entry point
├── .env                         # Environment variables
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore file
├── .prettierrc.json             # Prettier configuration
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 🔄 API Testing

You can test the API endpoints using tools like:

- Postman
- Insomnia
- curl commands

## 🧪 Running Tests

```bash
npm run test
# or
yarn test
```

## 📈 Roadmap

- Integration with payment gateways (Stripe, PayPal)
- Enhanced analytics for admin dashboard
- Email notifications for order status changes
- Review and rating system for products
- Real-time inventory management

## 📄 License

ISC
