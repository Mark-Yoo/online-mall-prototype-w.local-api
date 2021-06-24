import React from 'react';
import styles from './card.module.scss';

const Card = ({ item }: any) => {
  return (
    <div className={styles.indivCardWrapper}>
      <div className={styles.cardImg}>
        <img className={styles.productImage} src={item?.productImage} />
      </div>
      <div className={styles.productDetailWrapper}>
        <div className={styles.productName}>제품명: {item?.productName}</div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>가격: {item?.price.toLocaleString()}원</span>
          <span className={styles.discount}>-{item?.discount}%</span>
        </div>
        <div className={styles.grade}>별점: {item?.grade} / 5.0</div>
      </div>
    </div>
  );
};

export default Card;
