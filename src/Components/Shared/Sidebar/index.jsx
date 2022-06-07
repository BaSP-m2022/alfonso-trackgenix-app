import React from 'react';
import styles from '../Sidebar/sidebar.module.css';
import { useState } from 'react';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return (
      <button className={styles.sideButton} onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-play"></i>
      </button>
    );
  }
  return (
    <div className={styles.Sidebar}>
      <section className={styles.container}>
        <div className={styles.sidebarTitle}>
          <p>Menu</p>
          <i className="fa-solid fa-xmark" onClick={() => handleClose()}></i>
        </div>
        <a>Home</a> {/*<Link to="/tasks">home</Link>*/}
        <a>Sign-up</a>
        <a>Log-in</a>
        <a>Contact</a>
      </section>
      <section className={styles.container}>{children}</section>
    </div>
  );
};

//It must be implemented inside the components indexes
// You must provide children
//isOpen is a boolean to indicate if is open or not
//handleClose should change isOpen to false

export default Sidebar;