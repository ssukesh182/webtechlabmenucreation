import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown-menu">
      {items.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          className="dropdown-item"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
