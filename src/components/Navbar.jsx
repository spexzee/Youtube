import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { logo } from '../utils/constants.jsx';
import SearchBar from './SearchBar';
import './Navbar.css';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

const Navbar = ({ toggleSidebar }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      className="navbar-container"
    >
      <div className="navbar-left">
        <button className="navbar-menu-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={30} />
        </Link>
      </div>
      <SearchBar />
      <div className="navbar-right">
        <button className="navbar-icon-btn" onClick={toggleTheme}>
          <i className="fas fa-adjust"></i>
        </button>
        <button className="navbar-icon-btn">
          <i className="fas fa-video"></i>
        </button>
        <button className="navbar-icon-btn">
          <i className="fas fa-th"></i>
        </button>
        <button className="navbar-icon-btn">
          <i className="fas fa-bell"></i>
        </button>
      </div>
    </Stack>
  );
};

export default Navbar;
