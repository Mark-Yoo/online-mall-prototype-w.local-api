import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { changeDetailFilter } from '../../store/reducers/getItemlist';
import styles from './categoryfilter.module.scss';

const CategoryFilter = () => {
  const { itemList } = useSelector((state: RootState) => state.getItemlist);
  const dispatch = useDispatch();

  const onClickChangeCategory = useCallback(
    (e) => {
      dispatch(changeDetailFilter(e.target.id));
    },
    [dispatch],
  );

  return (
    <div className={styles.detailFilter} onClick={onClickChangeCategory}>
      <ul className={styles.detailFilterList}>
        <li id="releaseDate">최신 순</li>
        <li id="price">높은 가격 순</li>
        <li id="lowerPrice">낮은 가격 순</li>
        <li id="grade">별점 순</li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
