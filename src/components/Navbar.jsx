import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Phonebook.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <button className={styles.navButton} component={NavLink} to="/">
        Home
      </button>
      <button className={styles.navButton} component={NavLink} to="/login">
        Log in
      </button>
      <button className={styles.navButton} component={NavLink} to="/register">
        Register
      </button>
    </div>
  );
};

export default Navbar;
