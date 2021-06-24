import React, { useCallback } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  const onClickMoveCategory = useCallback(() => {}, []);

  return (
    <header className={styles.commonHeader}>
      <div className={styles.logo}></div>
      <ul className={styles.menu} onClick={onClickMoveCategory}>
        <li>
          <Link href="/category/new">
            <a style={{ color: 'black', textDecoration: 'none' }}>New Release</a>
          </Link>
        </li>
        <li>
          <Link href="/category/men">
            <a style={{ color: 'black', textDecoration: 'none' }}>Men</a>
          </Link>
        </li>
        <li>
          <Link href="/category/women">
            <a style={{ color: 'black', textDecoration: 'none' }}>Women</a>
          </Link>
        </li>
        <li>
          <Link href="/category/kids">
            <a style={{ color: 'black', textDecoration: 'none' }}>Kids</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.sideMenu}>
        <li>
          <Link href="/order">
            <a style={{ color: 'black', textDecoration: 'none' }}>장바구니</a>
          </Link>
        </li>
        <li>찜목록</li>
      </ul>
    </header>
  );
};

export default Header;
