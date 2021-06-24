import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrderList } from '../../store/reducers/getOrderlist';
import { Item } from '../../typings/db';
import styles from './ordercard.module.scss';

const OrderCard = ({ orderList }: any) => {
  const [basicTotalCost, setBasicTotalCost] = useState<number>(0);
  const [totalDiscounted, setTotalDiscounted] = useState<number>(0);
  const [finalCost, setFinalCost] = useState<number>(0);

  const dispatch = useDispatch();

  const onClickDelete = useCallback(
    (id) => {
      dispatch(deleteOrderList(id));
    },
    [dispatch],
  );

  useEffect(() => {
    if (orderList) {
      setBasicTotalCost(orderList.reduce((acc: any, cur: any) => acc + cur['price'], 0));
      setTotalDiscounted(orderList.reduce((acc: any, cur: any) => acc + cur['price'] * (cur['discount'] / 100), 0));
      setFinalCost(
        orderList.reduce((acc: any, cur: any) => acc + cur['price'] - cur['price'] * (cur['discount'] / 100), 0),
      );
    }
  }, [orderList]);

  return (
    <div className={styles.orderWrapper}>
      {orderList?.map((item: Item, i: number) => {
        return (
          <div className={styles.orderCard} key={`order` + i.toString()}>
            <div className={styles.detailImg}>
              <img src={item?.productImage}></img>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.productName}>{item?.productName}</span>
              <div>
                <span className={styles.productPrice}>가격: {item?.price.toLocaleString()} 원</span>
                <span style={{ color: 'red' }}>-{item?.discount}%</span>
              </div>
            </div>
            <button className={styles.orderDelete} onClick={() => onClickDelete(item.id)}>
              삭제
            </button>
          </div>
        );
      })}
      <div className={styles.totalCost}>
        <span>기본 가격: {basicTotalCost?.toLocaleString()}원</span>
        <span>총 할인가격: {totalDiscounted?.toLocaleString()}원</span>
        <span>배송비: {finalCost <= 100000 ? `5000원` : `무료`}</span>
        <span>
          최종 가격:{' '}
          {finalCost && (finalCost <= 100000 ? (finalCost + 5000).toLocaleString() : finalCost.toLocaleString())}원
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
