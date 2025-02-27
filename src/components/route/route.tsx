import { Route, Routes } from 'react-router';
import RootLayout from '@/components/layout/rootLayout';
import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import ShopInformation from '@/pages/shopInformation/shopInformation';
import ShopCheck from '@/pages/shopCheck/shopCheck';

export default function CustomRoute() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop-information' element={<ShopInformation />} />
        <Route path='/shop-check' element={<ShopCheck />} />
      </Route>
    </Routes>
  );
}
