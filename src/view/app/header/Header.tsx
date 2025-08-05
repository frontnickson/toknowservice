import React from 'react';

import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        toknowservice
      </div>
    </header>
  );
};

export default Header;