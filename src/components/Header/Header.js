import React from 'react';
import Link from 'gatsby-link';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <h1 className={'title is-2 has-text-weight-bold'}>
        <Link to="/" className={styles.link}>
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
