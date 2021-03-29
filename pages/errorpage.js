import React from 'react';
import Link from 'next/link';

const errorpage = () => {
  return (
    <div>
      <h1 className={styles.title}>Page Is Not Found</h1>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default errorpage;
