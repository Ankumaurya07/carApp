import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './HomeMain';
import About from './About';
import Brands from './Brands';
import Faq from './Faq';
import Futures from './Futures';
import Cars from '../pages/Cars';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRoute from '../Home/PrivateRoute'; // ⬅️ Import this
import VerifyOtp from '../pages/VerifyOtp';
import Logout from '../pages/Logout';

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeMain />} />
      <Route path='/About' element={<About />} />
      <Route path='/Help' element={<Faq />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verify' element={<VerifyOtp/>} />
      <Route path='/logout' element={<Logout/>} />



      {/* 🔒 Protected Routes */}
      <Route path='/Brands' element={
        <PrivateRoute>
          <Brands />
        </PrivateRoute>
      } />
      <Route path='/cars' element={
        <PrivateRoute>
          <Cars />
        </PrivateRoute>
      } />
      <Route path='/Feauters' element={
        <PrivateRoute>
          <Futures />
        </PrivateRoute>
      } />

    </Routes>
  );
};

export default Allroutes;
