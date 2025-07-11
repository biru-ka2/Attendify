import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar ">
      {/* Left - Hamburger (Mobile Only) */}
      <button
        className="hamburger"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          setIsAvatarOpen(false);
        }}
      >
        ☰
      </button>

      {/* Center - Logo */}
      <div className="logo">
        <NavLink to='/' className="navbar-logo hidden md:block"><img className='logo-image' src={assets.logo} alt="" /></NavLink>
        {/* <NavLink to='/' className="navbar-logo block md:hidden"><img className='logo-image' src={assets.logo} alt="" /></NavLink> */}
      </div>
      
    
    {/* Desktop Nav (hidden on mobile) */}
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) =>
    isActive 
      ? "nav-link active-link" 
      : "nav-link"
  }>Home</NavLink>
        <NavLink to="/mark" className={({ isActive }) =>
    isActive 
      ? "nav-link active-link" 
      : "nav-link"
  }>Mark</NavLink>
        <NavLink to="/view" className={({ isActive }) =>
    isActive 
      ? "nav-link active-link" 
      : "nav-link"
  }>View</NavLink>
        <NavLink to="/export" className={({ isActive }) =>
    isActive 
      ? "nav-link active-link" 
      : "nav-link"
  }>Export</NavLink>
      </div>

      {/* Right - Avatar */}
      <div className="navbar-avatar">
        <img
          src={assets.avatar}
          alt="Avatar"
          onClick={() => {
            setIsAvatarOpen(!isAvatarOpen);
            setIsMenuOpen(false);
          }}
          className="avatar-img"
        />
        {isAvatarOpen && (
          <div className="avatar-dropdown">
            <div className="dropdown-arrow"></div>
            <NavLink to="/login" onClick={() => setIsAvatarOpen(false)}>Login</NavLink>
            <NavLink to="/register" onClick={() => setIsAvatarOpen(false)}>Register</NavLink>
            <NavLink to="/dashboard" onClick={() => setIsAvatarOpen(false)}>Dashboard</NavLink>
            <button className="logout-btn">Logout</button>
          </div>
        )}
      </div>

      

      {/* Mobile Menu (on hamburger toggle) */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/mark" onClick={() => setIsMenuOpen(false)}>Mark</NavLink>
          <NavLink to="/view" onClick={() => setIsMenuOpen(false)}>View</NavLink>
          <NavLink to="/export" onClick={() => setIsMenuOpen(false)}>Export</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
