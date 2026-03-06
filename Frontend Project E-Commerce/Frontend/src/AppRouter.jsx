import { Routes, Route } from 'react-router';
import Home from './Pages/Home/Home.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import About from './Pages/About/About.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import PageNotFound from './Pages/PageNotFound/PageNotFound.jsx';
import Layout from './Layout/Layout.jsx';
import LoginForm from './Pages/SignUp/Components/Login.jsx';
import CartDetails from './Pages/CartDetails/CartDetails.jsx';
import OrderDetails from './Pages/OrderDetails/OrderDetails.jsx';
import CompleteOrder from './Pages/OrderDetails/Components/CompleteOrder.jsx';
import Products from './Pages/Home/Components/Products.jsx';
import WishListItems from './Pages/WishList/WishListItems.jsx';
import ProductSearchDetails from './Pages/ProductSearchDetails/ProductSearchDetails.jsx';
function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/allProducts" element={<Products />} />
          <Route path="/cartDetails" element={<CartDetails />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/orderDone" element={<CompleteOrder />} />
          <Route path="/wishlist" element={<WishListItems />} />
          <Route path="/product/:id" element={<ProductSearchDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
