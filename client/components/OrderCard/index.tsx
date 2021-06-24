import React, { useEffect } from 'react';
import { Item } from '../../typings/db';
import styles from './ordercard.module.scss';

const OrderCard = ({ orderList }: any) => {
  useEffect(() => {
    orderList && console.log(orderList);
  }, []);
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
              <span className={styles.productPrice}>가격: {item?.price.toLocaleString()} 원</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderCard;
