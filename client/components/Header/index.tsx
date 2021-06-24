import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/reducers/getItemlist';
import { RootState } from '../../store/reducers';

const Header = () => {
  const { categoryList } = useSelector((state: RootState) => state.getItemlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <header className={styles.commonHeader}>
      <div className={styles.logo}>
        <Link href="/">
          <img className={styles.logoImg} src="" alt="회사 로고" />
        </Link>
      </div>
      <ul className={styles.menu}>
        {categoryList?.map((category, i) => (
          <li key={`category` + i}>
            <Link href={`/category/${category.toLowerCase()}`}>
              <a style={{ color: 'black', textDecoration: 'none' }}>{category}</a>
            </Link>
          </li>
        ))}
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
