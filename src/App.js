import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './containers/Pages/Home/HomePage';
import ManagementPage from './containers/Pages/Management/Management';
import { BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={HomePage} />
          <Route path="/management" component={ManagementPage} />
          {/* <Route path="/manage-products" component={ManagementPage} /> */}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;