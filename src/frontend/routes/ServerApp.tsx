import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home from '../pages/Home';
import Layout from '../containers/Layout';
import NotFound from '../pages/NotFound';
import Commerce from '../pages/Commerce';

const serverRoutes = () => {
  return [
    {
      exact: true,
      component: Home,
      path: ['/', '/home'],
    },
    {
      exact: true,
      path: '/commerce',
      component: Commerce,
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
