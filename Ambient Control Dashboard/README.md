# Ambient Control Dashboard

A modern, responsive dashboard for controlling Limi modules with real-time environmental monitoring. Built with React.js, Redux Toolkit, and Tailwind CSS v4.

<img width="1892" height="860" alt="image" src="https://github.com/user-attachments/assets/3051cd1a-0cea-47c9-a5f8-7df0268551f9" />


## 🚀 Live Demo

[View Live Demo](https://ambient-control-dashboard.netlify.app/)

## 📋 Features Implemented

### Core Requirements

| Feature | Implementation |
|---------|---------------|
| **Modular UI Architecture** | Reusable `DeviceCard` component with toggle switch, status indicator, and brightness slider |
| **Responsive Grid Layout** | Mobile (1-col), Tablet (2-col), Desktop (3-4 col) using Tailwind CSS |
| **Global State Management** | Redux Toolkit with master power control that toggles all devices |
| **Custom Hooks** | `useDeviceStatus` simulates real-time temperature and power usage updates |
| **Micro-interactions** | Smooth animations with CSS transitions and pulse effects |
| **Toast Notifications** | `react-toastify` shows success messages when toggling devices |
| **Data Fetching** | Async thunk fetches initial device list from local `data.json` |
| **Dark Mode** | Beautiful dark theme with ambient gradients |

### Bonus Features
- ✅ Clean folder structure (`/components`, `/hooks`, `/store`)
- ✅ DRY code principles with reusable components
- ✅ Responsive from mobile to 4K displays
- ✅ Proper loading and error states

## 🛠️ Tech Stack

- **React.js** (v18) - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS v4** - Styling (NO config file, CSS-first approach)
- **Vite** - Build tool and dev server
- **React Toastify** - Toast notifications
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations *(optional)*

## 📁 Project Structure

├── public/

│ └── data.json # Mock device data

├── src/

│ ├── components/

│ │ ├── Sidebar.jsx 

│ │ └── DeviceCard.jsx 

│ ├── store/

│ │ ├── store.js

│ │ └── deviceSlice.js 

│ ├── hooks/

│ │ └── useDeviceStatus.js

│ ├── App.jsx 

│ ├── main.jsx

│ └── index.css 

├── index.html

├── package.json

├── eslint.config.js

├── package-lock.js

└── vite.config.js


## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Clone the repository
```bash
git clone https://github.com/HussnainAshiq-5657/React-Course-and-Projects/edit/main/Ambient%20Control%20Dashboard/
cd ambient-control-dashboard
npm install
npm run dev
