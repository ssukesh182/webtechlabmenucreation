import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'About Us', 
      path: '/about',
      dropdown: [
        { label: 'History', path: '/about/history' },
        { label: 'Leadership', path: '/about/leadership' },
        { label: 'Vision & Mission', path: '/about/vision' }
      ]
    },
    { 
      label: 'Academics', 
      path: '/academics',
      dropdown: [
        { label: 'Undergraduate', path: '/academics/undergrad' },
        { label: 'Postgraduate', path: '/academics/postgrad' },
        { label: 'Departments', path: '/academics/departments' }
      ]
    },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Research', path: '/research' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Placements', path: '/placements' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <GraduationCap size={32} color="var(--primary)" />
        KAZE <span>University</span>
      </Link>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
          return (
            <li key={index} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>
              {item.dropdown && <Dropdown items={item.dropdown} />}
            </li>
          );
        })}
      </ul>

      <button className="mobile-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
