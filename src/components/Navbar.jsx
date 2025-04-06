import React from 'react';
import { Link } from 'react-router-dom';
import { GiGoldBar } from 'react-icons/gi';

const Navbar = () => {
  return (
    <>
      <style>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
          padding: 1rem 2rem;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(8px); /* Frosted glass effect */
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #000; /* Black text */
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-links a {
          color: #000; /* Black text */
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-links a:hover {
          color: #e84c3d; /* Red color on hover */
          border-bottom: 2px solid #e84c3d;
        }
        
        .nav-links a.active {
          color: #e84c3d;
          border-bottom: 2px solid #e84c3d;
        }

        /* Remove dark mode styles since we want consistent black text */
        @media (prefers-color-scheme: dark) {
          header {
            background-color: rgba(255, 255, 255, 0.9);
          }
          .nav-logo, .nav-links a {
            color: #000;
          }
        }
      `}</style>

      <header>
        <Link to="/" className="nav-logo">
          <GiGoldBar size={24} color="#000" />
          <span>Platinum</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/overview" className="nav-link">Overview</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/amenities" className="nav-link">Amenities</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;