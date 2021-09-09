import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/Product/ProductDetail';
import Layout from '../containers/Layout';
import { useStateValue } from '../context';
import NotFound from '../pages/NotFound';
import HomeProducts from '../pages/Product/HomeProducts';

const RoutesStudent = () => {
  const { theme } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const body = document.body.classList;
    theme === 'light' ? body.remove('dark') : body.add(theme);
    theme === 'dark' ? body.remove('light') : body.add(theme);
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/productdetail' component={ProductDetail} />
          <Route exact path='/products' component={HomeProducts} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesStudent;
