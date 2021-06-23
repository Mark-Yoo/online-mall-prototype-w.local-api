import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.infoFooter}>
      <div className={styles.companyInfo}>
        <img className={styles.logo} alt="회사 로고" />
        <span>(주)회사 이름</span>
        <span>회사 정보</span>
        <span>회사 위치</span>
      </div>
      <div className={styles.rightsInfo}>
        <div>
          <span>서비스 이용 약관</span>
          <span>개인정보 처리방침</span>
          <span>입점 문의</span>
        </div>
        <span>Copyright All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
