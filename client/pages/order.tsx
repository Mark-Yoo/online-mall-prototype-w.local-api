import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import OrderCard from '../components/OrderCard';
import { RootState } from '../store/reducers';
import { getUserOrderList } from '../store/reducers/getOrderlist';

const Order = () => {
  const { orderList } = useSelector((state: RootState) => state.getOrderlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrderList());
  }, [dispatch]);

  useEffect(() => {
    console.log(orderList);
  }, [orderList]);

  return <AppLayout>{orderList && <OrderCard orderList={orderList} />}</AppLayout>;
};

export default Order;
