import { Route, Routes } from 'react-router';
import MainLayout from './layout/mainLayout';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Pagination from './pages/Pagination.jsx';
import InfiniteScrollProducts from './pages/Dynamic.jsx';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/pages" element={<Pagination />} />{' '}
          <Route path="/scroll" element={<InfiniteScrollProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
