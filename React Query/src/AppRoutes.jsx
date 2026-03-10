import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Products from './pages/products';
import Pagination from './pages/pagination';
import ScrollPagination from './pages/scrollPagination';
import MainLayout from './layout/mainLayout';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/paginate" element={<Pagination />} />
          <Route path="/scrollPaginate" element={<ScrollPagination />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
