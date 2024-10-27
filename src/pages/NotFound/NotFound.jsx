import React from 'react';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found__container">
            <img src="https://http.dog/404.jpg" alt="404 Not Found" className="not-found__image" />
        </div>
    );
};

export default NotFound;