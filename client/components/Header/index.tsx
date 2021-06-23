import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.commonHeader}>
      <div className={styles.logo}></div>
      <ul className={styles.menu}>
        <li>New Release</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <ul className={styles.sideMenu}>
        <li>장바구니</li>
        <li>찜목록</li>
      </ul>
    </header>
  );
};

export default Header;
