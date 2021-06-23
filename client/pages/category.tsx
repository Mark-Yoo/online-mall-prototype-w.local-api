import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import Card from '../components/Card';
import CardWrapper from '../components/CardWrapper';
import { RootState } from '../store/reducers';
import { getList } from '../store/reducers/getItemlist';

const Category = () => {
  const { itemList } = useSelector((state: RootState) => state.getItemlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <AppLayout>
      <CardWrapper>
        {itemList &&
          itemList.map((item, i) =>
            i !== 0 && i % 4 ? (
              <Card key={item.id.toString()} item={item} />
            ) : (
              <React.Fragment key={item.id.toString()}>
                <br />
                <Card item={item} />
              </React.Fragment>
            ),
          )}
      </CardWrapper>
    </AppLayout>
  );
};

export default Category;
