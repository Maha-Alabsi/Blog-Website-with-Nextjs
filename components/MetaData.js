import React from 'react';
import Head from 'next/head';

const MetaData = ({title,description}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

MetaData.defaultProps = {
    title: 'Next App',
    description:'App created with Nextjs'
}

export default MetaData;