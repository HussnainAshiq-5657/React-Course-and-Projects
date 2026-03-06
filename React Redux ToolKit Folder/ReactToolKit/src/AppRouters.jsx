import { Routes, Route } from 'react-router';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Products from './Pages/Products.jsx';
import LayoutMenu from './LayoutMenu/LayoutMenu.jsx';
import CartList from './Products/CartList.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
function AppRouters() {
  return (
    <>
      <Routes>
        <Route element={<LayoutMenu />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />} />
          <Route path="/cartList" element={<CartList />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouters;
