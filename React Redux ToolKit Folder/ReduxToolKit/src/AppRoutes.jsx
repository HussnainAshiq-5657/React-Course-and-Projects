import React from 'react';
import { Routes, Route } from 'react-router';
import LayoutMenu from './LayoutMenu/LayoutMenu.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Products from './Pages/Products.jsx';
import CartList from './Products/CartList.jsx';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<LayoutMenu />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cartList" element={<CartList />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
