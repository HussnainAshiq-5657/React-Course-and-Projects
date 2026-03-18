import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import MainLayout from './layout/mainLayout';
import Products from './pages/products';
import ProductApis from './pages/productApis';
import CartDetails from './pages/cartDetails';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/products" element={<ProductApis />} />
          <Route path="/cartDetails" element={<CartDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
