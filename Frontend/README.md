# EasyWear E-Commerce Frontend

A modern, responsive e-commerce web application built with React, TypeScript and Tailwind CSS for the EasyWear clothing brand.

## 🚀 Technology Stack

- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **State Management**: Redux Toolkit + RTK Query
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: RTK Query with caching
- **Authentication**: JWT with secure storage
- **Persistence**: Redux Persist for state persistence
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **Fonts**: Poppins, Prata, Playfair Display

## ✨ Features

### User Features

- **Authentication**

  - User registration and login
  - JWT-based authentication with refresh tokens
  - Persistent login state

- **Product Browsing**

  - Browse products by category
  - Filter and sort products
  - Search functionality
  - Responsive product grid

- **Product Details**

  - Multiple product images
  - Size and variant selection
  - Detailed product information
  - Related products

- **Shopping Cart**

  - Add/remove products
  - Update quantities
  - Cart persistence (logged in and guest users)
  - Cart summary

- **Checkout Process**

  - Multi-step checkout flow
  - Shipping information collection
  - Payment method selection
  - Order review
  - Order confirmation

- **User Account**
  - Order history
  - Address management
  - Profile settings
  - Wishlist

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

### Technical Features

- **Responsive Design**

  - Mobile-first approach
  - Adapts to all screen sizes
  - Touch-friendly interactions

- **Performance Optimized**

  - Lazy loading components
  - Image optimization
  - Efficient state management

- **Theme Support**
  - Light/dark mode
  - Customizable color schemes

## 🖥️ Pages

- **Home**: Landing page showcasing featured products, categories, and promotions
- **Products**: Browsable product catalog with filters and sorting
- **Product Detail**: Detailed view of individual products
- **Cart**: Shopping cart management
- **Checkout**: Multi-step checkout process
- **Order Success**: Confirmation page after successful order
- **User Account**: User profile, orders, addresses, and settings
- **Authentication**: Login and registration pages
- **Admin Dashboard**: Admin control panel

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn package manager

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_PUBLIC_URL=http://localhost:5173
VITE_NODE_ENV=development
```

### Installation Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Ecommerce/Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. For production build:
   ```bash
   npm run build
   npm run preview
   # or
   yarn build
   yarn preview
   ```

## 📁 Project Structure

```
Frontend/
├── public/                     # Static files
├── src/
│   ├── assets/                 # Images, fonts, and other assets
│   │   ├── admin_assets/       # Admin-specific assets
│   │   ├── frontend_assets/    # User-facing assets
│   ├── components/             # Reusable components
│   │   ├── form/               # Form components
│   │   ├── shared/             # Shared components
│   │   ├── ui/                 # UI components
│   ├── constants/              # Application constants
│   ├── features/               # Feature modules
│   │   ├── redux/              # Redux store setup
│   │       ├── api/            # API configuration
│   │       ├── features/       # Redux slices
│   │           ├── auth/       # Authentication slice
│   │           ├── product/    # Product slice
│   │           ├── cart/       # Cart slice
│   ├── hooks/                  # Custom React hooks
│   ├── layout/                 # Layout components
│   ├── lib/                    # Third-party library integrations
│   ├── pages/                  # Application pages
│   │   ├── admin/              # Admin pages
│   │   ├── auth/               # Authentication pages
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles
├── .env                        # Environment variables
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                  # Git ignore file
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

## 🎨 Theme Customization

The application uses a custom Tailwind CSS configuration with theme variables. The theme can be customized in:

- `src/index.css` - Theme variables and global styles
- `tailwind.config.js` - Tailwind configuration

## 🔄 State Management

Redux Toolkit is used for state management with the following slices:

- **Auth Slice**: Handles user authentication state
- **Product Slice**: Manages product data and filters
- **Cart Slice**: Manages shopping cart state

RTK Query is used for API data fetching with endpoints defined in:

- `src/features/redux/api/baseApi.ts`
- Feature-specific API slices in their respective folders

## 🌐 API Integration

The frontend communicates with the backend API using RTK Query. The base API configuration is in `src/features/redux/api/baseApi.ts`.

## 📱 Responsive Design

The application is designed to be fully responsive using:

- Mobile-first approach with Tailwind CSS
- Responsive layout components
- Media queries for specific adjustments

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend returns access token and refresh token
3. Access token is stored in memory for API calls
4. Refresh token is stored securely for token renewal
5. RTK Query automatically includes the token in API requests

## 🧪 Testing

```bash
npm run test
# or
yarn test
```

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

This will generate optimized production files in the `dist` directory.

## 📈 Roadmap

- Add wishlist functionality
- Implement product reviews and ratings
- Enhanced search with autocomplete
- Social media login integration
- Performance optimizations

## 📄 License

ISC
