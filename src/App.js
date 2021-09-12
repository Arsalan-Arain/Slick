import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initBanners } from './redux/actions/banners';
import { initProucts } from './redux/actions/products';
import Loader from './components/UI/Loader/Loader';

const Layout = React.lazy(() => import('./components/Layout/Layout'));
const HomePage = React.lazy(() => import('./containers/Pages/Home/HomePage'));
const ManagementPage = React.lazy(() => import('./containers/Pages/Management/Management'));
const AnalyticsPage = React.lazy(() => import('./containers/Pages/Analytics/Analytics'));
const ProductsPage = React.lazy(() => import('./containers/Pages/Products/Products'));


const app = (props) => {
  useEffect(() => {
    props.onInitBanners();
    props.onInitProducts();
  }, [])

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Layout>
          <Route path="/" exact component={HomePage} />
          <Route path="/management" component={ManagementPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/analytics" component={AnalyticsPage} />
        </Layout>
      </React.Suspense>
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