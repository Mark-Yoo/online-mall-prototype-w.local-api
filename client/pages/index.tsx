import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { getCategory } from '../store/reducers/getItemlist';

const Home = () => {
  const { categoryList } = useSelector((state: RootState) => state.getItemlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <AppLayout>
      <Card />
    </AppLayout>
  );
};

export default Home;
