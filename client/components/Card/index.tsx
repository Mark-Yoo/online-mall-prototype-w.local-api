import React from 'react';
import { Item } from '../../typings/db';
import styles from './card.module.scss';

const Card = ({ item }: any) => {
  return (
    <div className={styles.indivCardWrapper}>
      <div className={styles.cardImg}>
        <img className={styles.productImage} src={item.productImage} />
      </div>
      <div className={styles.productDetailWrapper}>
        <div className={styles.productName}>제품명: {item.productName}</div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>가격: {item.price.toLocaleString()}원</span>
        </div>
        <div className={styles.grade}>별점: {item.grade} / 5.0</div>
      </div>
    </div>
  );
};

export default Card;
