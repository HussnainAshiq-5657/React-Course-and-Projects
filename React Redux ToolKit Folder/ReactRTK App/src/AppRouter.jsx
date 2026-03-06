import { Route, Routes } from 'react-router';
import LayoutMenu from './Layout/LayoutMenu';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Products from './Pages/Products.jsx';
import CartItems from './Products/CartItems.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<LayoutMenu />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />} />
          <Route path="/cartList" element={<CartItems />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
