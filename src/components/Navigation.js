import React from 'react';
import '../styles/Navigation.scss';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo-white.svg';
import Instagram from '../assets/instagram-social.svg';
import Dribble from '../assets/dribble-social.svg';
import Twitter from '../assets/twitter-social.svg';
import Youtube from '../assets/yt-social.svg';




const Navigation = () => {
    return ( 
        <div className="navigation-container">
            <img src={Logo} alt="smartshopper-logo"/>
            <ul>
                <Link to="/app"><li>Moje ulubione</li></Link>
                <Link to="/app/brands"><li>Moje sklepy</li></Link>
            </ul>
            <div className="navigation-social">
                <img src={Instagram} alt="instagram"/>
                <img src={Dribble} alt="dribble"/>
                <img src={Twitter} alt="twitter"/>
                <img src={Youtube} alt="YouTube"/>
            </div>
        </div>
     );
}
 
export default Navigation;