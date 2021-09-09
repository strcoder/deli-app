import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home from '../pages/Home';
import ProductDetail from '../pages/Product/ProductDetail';
import HomeProducts from '../pages/Product/HomeProducts';
import Layout from '../containers/Layout';
import NotFound from '../pages/NotFound';

const serverRoutes = () => {
  return [
    {
      exact: true,
      component: Home,
      path: ['/', '/home'],
    },
    {
      exact: true,
      component: ProductDetail,
      path: '/productdetail',
    },
    {
      exact: true,
      component: HomeProducts,
      path: '/products',
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

const RoutesStudent = () => {
  return (
    <Layout>
      {renderRoutes(serverRoutes())}
    </Layout>
  );
};

export default RoutesStudent;
