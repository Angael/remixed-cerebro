// @ts-nocheck
import React, { useEffect } from 'react';

interface IProps {}

const Analytics = (_props: IProps) => {
  // if (typeof window === 'undefined') {
  //   return null;
  // }
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3D7PQ4NCP');
  });

  return (
    <script
      async
      src='https://www.googletagmanager.com/gtag/js?id=G-D3D7PQ4NCP'
    />
  );
};

export default React.memo(Analytics);
