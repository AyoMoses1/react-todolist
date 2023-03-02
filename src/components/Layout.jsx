import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
}

export default Layout;
