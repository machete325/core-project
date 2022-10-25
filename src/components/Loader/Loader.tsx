import React from 'react';
import { CircularProgress } from '@mui/material';
import s from './Loader.module.scss';

function Loader() {
  return (
    <div className={s.wrapper}>
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Loader;
