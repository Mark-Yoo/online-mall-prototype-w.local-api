import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/Card';
import CardWrapper from '../../components/CardWrapper';
import CategoryFilter from '../../components/Categoryfilter';
import { RootState } from '../../store/reducers';
import { getFilter } from '../../store/reducers/getItemlist';
import { useRouter } from 'next/router';

const Category = () => {
  const { itemList } = useSelector((state: RootState) => state.getItemlist);
  const dispatch = useDispatch();
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    category && dispatch(getFilter(category));
  }, [category]);

  return (
    <AppLayout>
      <CardWrapper>
        <CategoryFilter />
        {itemList &&
          itemList?.map((item, i) =>
            i !== 0 && i % 4 ? (
              <Link href={`/detail/${item.id}`} key={item.id.toString()}>
                <a style={{ color: 'black' }}>
                  <Card item={item} />
                </a>
              </Link>
            ) : (
              <React.Fragment key={item.id.toString()}>
                <br />
                <Link href={`/detail/${item.id}`}>
                  <a style={{ color: 'black' }}>
                    <Card item={item} />
                  </a>
                </Link>
              </React.Fragment>
            ),
          )}
      </CardWrapper>
    </AppLayout>
  );
};

export default Category;
