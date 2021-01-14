import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/Layout.scss';

import BrandsList from '../components/BrandsList';
import Navigation from '../components/Navigation';
import ProductsList from '../components/ProductsList';
import BackToTop from '../components/BackToTop';

const Layout = () => {
    return (
        <div className="page-container">
            <Router>
                <Navigation />
                <Route path="/app" exact component={ProductsList} />
                <Route path="/app/brands" component={BrandsList} />
                <BackToTop />
            </Router>
        </div>
     );
}
 
export default Layout;