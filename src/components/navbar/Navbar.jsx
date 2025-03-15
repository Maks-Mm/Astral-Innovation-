// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; // Import the CSS Module
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";
import { TfiInfoAlt } from "react-icons/tfi";
import { FaReacteurope } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>
        <IoHomeOutline />
      </Link>
      <Link to="/AboutUs" className={styles.navItem}>
      <TfiInfoAlt />
      </Link>
      <Link to="/Contacts" className={styles.navItem}>
        <AiOutlineComment />
      </Link>
      <Link to="/Guides" className={styles.navItem}>
        <FaReacteurope />
      </Link>
      <Link to="/Technologies" className={styles.navItem}>
        <LuLightbulb/>
      </Link>

      <Link to="/login" className={styles.navItem}>
        <CgLogIn />
      </Link>
      <Link to="/register" className={styles.navItem}>
        <CgProfile />
      </Link>
    </nav>
  );
};

export default NavBar;
