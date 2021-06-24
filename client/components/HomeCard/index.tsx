import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '../../store/reducers';
import { getCategory } from '../../store/reducers/getItemlist';
import styles from './homecard.module.scss';

const HomeCard = () => {
  const { categoryList } = useSelector((state: RootState) => state.getItemlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <div className={styles.homecardWrapper}>
      <ul className={styles.homeMenuWrapper}>
        {categoryList?.map((category, i) => (
          <Link href={`/category/${category.toLowerCase()}`}>
            <li key={i.toString()}>
              <a>{category}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomeCard;
