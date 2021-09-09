import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="logo">
        <Link to="/">React Movie App</Link>
      </div>
      <div className="Navigation__link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navigation;
