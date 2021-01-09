import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/Layout.scss';

import BrandsList from './BrandsList';
import Navigation from './Navigation';
import ProductsList from './ProductsList';

const Layout = () => {
    return (
        <div className="page-container">
            <Router>
                <Navigation />
                <Route path="/app" component={ProductsList} />
                <Route path="/app/brands" component={BrandsList} />
            </Router>
        </div>
     );
}
 
export default Layout;