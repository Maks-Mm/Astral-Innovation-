// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; // Import the CSS Module

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>
        Home
      </Link>
      <Link to="/AboutUs" className={styles.navItem}>
        About Us
      </Link>
      <Link to="/Contacts" className={styles.navItem}>
        Contacts
      </Link>
      <Link to="/Guides" className={styles.navItem}>
        Guides
      </Link>
      <Link to="/Technologies" className={styles.navItem}>
        Technologies
      </Link>

      <Link to="/login" className={styles.navItem}>
        Login
      </Link>
      <Link to="/register" className={styles.navItem}>
        Register New Account
      </Link>
    </nav>
  );
};

export default NavBar;
