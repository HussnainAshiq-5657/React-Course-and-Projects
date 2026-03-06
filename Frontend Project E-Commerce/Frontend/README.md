# E-Commerce Store 🛒

A modern, production-ready e-commerce application built with React and Redux. MarketHub provides a seamless shopping experience with product browsing, cart management, user authentication, and wishlist functionality.

![React](https://img.shields.io/badge/React-61dafb?style=flat&logo=react) ![Redux](https://img.shields.io/badge/Redux-764abc?style=flat&logo=redux) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat&logo=tailwindcss) ![Material-UI](https://img.shields.io/badge/Material_UI-007FFF?style=flat&logo=mui)

## ✨ Features

### 🛍️ Shopping Experience

- **Product Catalog** - Browse products with beautiful card layouts
- **Advanced Search** - Search products by name or description
- **Smart Filters** - Filter by category, price range, and sort options
- **Product Details** - View detailed information with image gallery and ratings
- **Quick View** - Preview product details in a modal without leaving the page
- **Shopping Cart** - Add, update quantities, and remove items
- **Wishlist/Favorites** - Save products for later (authentication required)
- **Checkout Process** - Review order with price breakdown and complete purchase

### 👤 User Management

- **User Authentication** - Secure login and registration
- **Profile Management** - Update personal information
- **Protected Routes** - Secure access to authenticated features
- **Persistent Sessions** - Stay logged in across browser sessions

### 🎨 User Interface

- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Beautiful gradients, animations, and transitions
- **Toast Notifications** - Real-time feedback for user actions
- **Loading States** - Elegant loading spinners and skeletons
- **Error Handling** - Graceful error messages and 404 page

## 🚀 Tech Stack

### Frontend Core

- **React** - Modern UI library with latest features
- **React Router DOM** - Client-side routing and navigation
- **React DOM** - React rendering for web

### State Management

- **Redux** - Predictable state container (Classic Redux)
- **React-Redux** - Official React bindings for Redux
- **Redux Thunk** - Async middleware for Redux
- **Redux Persist** - Persist and rehydrate Redux store

### Form Management

- **Formik** - Form state management and validation
- **Yup** - Schema-based form validation

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI** - React component library
- **@mui/icons-material** - Material Design icons
- **@emotion/react & @emotion/styled** - CSS-in-JS library

### HTTP & API

- **Axios** - Promise-based HTTP client
- **Fake Store API** - RESTful API for products and users

### UI Enhancements

- **React Toastify** - Beautiful toast notifications

### Development Tools

- **React Scripts** - Create React App build scripts
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic CSS vendor prefixing

## 📁 Project Structure

## 🎯 Redux Implementation

### Architecture

- **Classic Redux Pattern** - Traditional Redux (not Redux Toolkit)
- **Action Types** - Constants for action type strings
- **Action Creators** - Functions that return action objects
- **Thunks** - Async action creators using Redux Thunk
- **Reducers** - Pure functions that handle state updates
- **Middleware** - Redux Thunk for async operations
- **Persistence** - Redux Persist for cart, auth, and favorites
- **DevTools** - Redux DevTools integration for debugging

### Store Organization

- **Auth State** - User authentication and profile data
- **Cart State** - Shopping cart items and totals
- **Products State** - Product listings and details
- **Favorites State** - User's wishlist items

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/szm96dev/MarketHub.git

# Navigate to project directory
cd MarketHub

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

### Environment Variables

The application uses environment variables for configuration. A `.env.example` file is provided as a template.

**Required Environment Variables:**

```bash
# API Configuration
REACT_APP_API_BASE_URL=https://fakestoreapi.com  # Base URL for the API
REACT_APP_API_TIMEOUT=10000                      # API request timeout (ms)

# App Configuration
REACT_APP_NAME=MarketHub                         # Application name
REACT_APP_VERSION=1.0.0                          # Application version

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=false                 # Enable/disable analytics
REACT_APP_ENABLE_DEBUG=false                     # Enable/disable debug mode
```

**Note:** In Create React App, environment variables must be prefixed with `REACT_APP_` to be accessible in the application. The `.env` file is gitignored and should not be committed to version control.

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized static files
```

## 🔑 API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) for backend operations.

### Test Credentials

```
Username: johnd
Password: m38rmF$
```

### API Endpoints Used

- `GET /products` - Fetch all products
- `GET /products/:id` - Get single product
- `GET /products/categories` - Get all categories
- `GET /products/category/:category` - Filter by category
- `POST /auth/login` - User authentication
- `POST /users` - User registration
- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update user profile

## 🎨 UI/UX Highlights

- **Gradient Backgrounds** - Modern gradient designs
- **Smooth Animations** - CSS transitions and transforms
- **Glass Morphism** - Frosted glass effects
- **Card Hover Effects** - Interactive product cards
- **Loading Skeletons** - Better perceived performance
- **Toast Notifications** - Non-intrusive user feedback
- **Modal Dialogs** - Quick view and confirmations
- **Responsive Navigation** - Mobile-friendly menu
- **Dark Mode** - Eye-friendly dark theme

## ⚡ Performance Optimizations

- **Code Splitting** - Lazy loading for route-based components
- **Memoization** - React.memo, useMemo, useCallback
- **Optimized Re-renders** - Selective component updates
- **Image Optimization** - Proper sizing and lazy loading
- **Bundle Size** - Production build optimizations
- **Efficient State Updates** - Redux best practices

## 📱 Responsive Breakpoints

```css
sm:  640px  // Small devices (landscape phones)
md:  768px  // Medium devices (tablets)
lg:  1024px // Large devices (desktops)
xl:  1280px // Extra large devices
2xl: 1536px // 2X extra large devices
```

## 🛠️ Available Scripts

### `npm start`

Runs the app in development mode at `http://localhost:3000`

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder

### `npm run eject`

Ejects from Create React App (one-way operation)

## 🎓 Skills Demonstrated

This project showcases proficiency in:

- ✅ Modern React development with hooks
- ✅ Redux state management (classic pattern)
- ✅ Async operations with Redux Thunk
- ✅ Form handling and validation
- ✅ RESTful API integration
- ✅ Authentication and protected routes
- ✅ Responsive design with Tailwind CSS
- ✅ Material-UI component library
- ✅ Code organization and architecture
- ✅ Performance optimization techniques
- ✅ Theme system implementation
- ✅ Production-ready code practices

## 📸 Screenshots

[Add screenshots of your application here]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Muhammed Hussnain Ashiq**

- GitHub: [@Hussnain Ashiq](https://github.com/HussnainAshiq-5657)
- LinkedIn: [Muhammed Hussnain Ashiq](https://www.linkedin.com/in/hussnainnaz-dev)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React and Redux
