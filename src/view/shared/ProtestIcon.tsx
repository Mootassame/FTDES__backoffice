import { Spin } from 'antd';
import React from 'react';

import { ReactComponent as Protest } from 'src/icons/Protest.svg';

const Spinner = (props) => {
  return (
    <Protest
      style={{
        width: '10rem',
        height: '10rem',
        opacity: '40%',
      }}
    />
  );
};

export default Spinner;
