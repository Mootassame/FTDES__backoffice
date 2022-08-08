import { Spin } from 'antd';
import React from 'react';
import { ReactComponent as Violence } from 'src/icons/Violence.svg';

const Spinner = (props) => {
  return (
    <Violence
      style={{
        width: '10rem',
        height: '10rem',
        opacity: '40%',
      }}
    />
  );
};

export default Spinner;
