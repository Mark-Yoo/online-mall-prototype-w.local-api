import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { getCopyList, getDetailFilter } from '../../store/reducers/getItemlist';
import styles from './sidecategory.module.scss';

const SideCategory = () => {
  const [activeCategory, setActiveCategory] = useState<string>('total');
  const { detailCategoryList } = useSelector((state: RootState) => state.getItemlist);
  const dispatch = useDispatch();

  const onClickChangeDetailCategory = useCallback((e) => {
    if (e.target.nodeName !== 'LI') return;
    setActiveCategory(e.target.id);
    dispatch(getCopyList(e.target.id));
  }, []);

  useEffect(() => {
    dispatch(getDetailFilter());
  }, [dispatch]);

  return (
    <menu className={styles.sideMenu} onClick={onClickChangeDetailCategory}>
      <ul>
        <li id="total" className={activeCategory === 'total' ? styles.active : ''}>
          전체
        </li>
        {detailCategoryList?.map((category, i) => (
          <li
            key={`detailCategory` + i.toString()}
            id={category}
            className={activeCategory === category ? styles.active : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default SideCategory;
