import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Layout from './components/Layout/Layout';
import HomePage from './containers/Pages/Home/HomePage';
import ManagementPage from './containers/Pages/Management/Management';
import AnalyticsPage from './containers/Pages/Analytics/Analytics';
import ProductsPage from './containers/Pages/Products/Products';
import {initBanners} from './redux/actions/banners';
import {initProucts} from './redux/actions/products';

const app = (props) => {
  useEffect(() => {
    props.onInitBanners();
    props.onInitProducts();
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={HomePage} />
        <Route path="/management" component={ManagementPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/analytics" component={AnalyticsPage} />
      </Layout>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onInitProducts: () => dispatch(initProucts()),
    onInitBanners: () => dispatch(initBanners())
  };
}

export default connect(null, mapDispatchToProps)(app);