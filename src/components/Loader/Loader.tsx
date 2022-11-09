import React from 'react';
import { CircularProgress } from '@mui/material';
import s from './Loader.module.scss';

type Props = {
  variant?: 'down';
};

function Loader({ variant }: Props) {
  return (
    <div className={`${s.wrapper} ${variant && s[variant]}`}>
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Loader;
