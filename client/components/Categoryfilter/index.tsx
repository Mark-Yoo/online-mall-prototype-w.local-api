import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { changeDetailFilter } from '../../store/reducers/getItemlist';
import styles from './categoryfilter.module.scss';

const CategoryFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>('grade');
  const dispatch = useDispatch();

  const onClickChangeCategory = useCallback(
    (e) => {
      if (e.target.nodeName !== 'LI') return;
      setActiveFilter(e.target.id);
      dispatch(changeDetailFilter(e.target.id));
    },
    [dispatch],
  );

  return (
    <div className={styles.detailFilter} onClick={onClickChangeCategory}>
      <ul className={styles.detailFilterList}>
        <li id="releaseDate" className={activeFilter === 'releaseDate' ? styles.active : ''}>
          최신 순
        </li>
        <li id="price" className={activeFilter === 'price' ? styles.active : ''}>
          높은 가격 순
        </li>
        <li id="lowerPrice" className={activeFilter === 'lowerPrice' ? styles.active : ''}>
          낮은 가격 순
        </li>
        <li id="grade" className={activeFilter === 'grade' ? styles.active : ''}>
          별점 순
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
