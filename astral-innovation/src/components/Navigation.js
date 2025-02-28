// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; // If using CSS Modules

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/AboutUs">About Us</Link> {/* Check this link */}
      <Link to="/Contacts">Contacts</Link>
      <Link to="/UserPanel">User Panel</Link>
    </nav>
  );
};

export default Navigation;
