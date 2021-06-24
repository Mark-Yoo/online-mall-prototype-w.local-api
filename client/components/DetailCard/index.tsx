import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { getItemDetail } from '../../store/reducers/getItemlist';
import styles from './detailcard.module.scss';
import { postOrderList } from '../../store/reducers/getOrderlist';

const DetailCard = () => {
  const { itemDetail } = useSelector((state: RootState) => state.getItemlist);

  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postOrderList(itemDetail[0]));
      router.push('/order');
    },
    [itemDetail],
  );

  useEffect(() => {
    id && dispatch(getItemDetail(id));
  }, [id]);

  return (
    <form className={styles.purchaseForm} onSubmit={onSubmit}>
      <div className={styles.detailImg}>
        <img src={itemDetail[0]?.productImage}></img>
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productName}>{itemDetail[0]?.productName}</span>
        <span className={styles.productPrice}>가격: {itemDetail[0]?.price.toLocaleString()} 원</span>
        <button type="submit" className={styles.purchaseBtn}>
          장바구니 담기
        </button>
      </div>
    </form>
  );
};

export default DetailCard;
