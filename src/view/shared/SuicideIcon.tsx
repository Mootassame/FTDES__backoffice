import { Spin } from 'antd';
import React from 'react';
import { ReactComponent as Suicide } from 'src/icons/Molotov.svg';

const Spinner = (props) => {
  return (
    <Suicide
      style={{
        width: '10rem',
        height: '10rem',
        opacity: '40%',
      }}
    />
  );
};

export default Spinner;
