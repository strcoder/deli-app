import React from 'react';
import Appbar from '../../components/Appbar';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

export default Layout;
