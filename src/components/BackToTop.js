import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import '../styles/BackToTop.scss';

const handleBackToTop = () => {
    window.scrollTo(0, 0);
}

const BackToTop = () => {
    return ( 
        <div className="back-to-top" onClick={handleBackToTop}>
            <AiOutlineArrowUp />
        </div>
     );
}
 
export default BackToTop;