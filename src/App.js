import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from './containers/Pages/Home/HomePage';
import ManagementPage from './containers/Pages/Management/Management';
import AnalyticsPage from './containers/Pages/Analytics/Analytics';
import ProductsPage from './containers/Pages/Products/Products';

class App extends Component {
  render() {
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
}

export default App;