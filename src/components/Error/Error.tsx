import { Alert, AlertTitle } from '@mui/material';
import React from 'react';
import s from './Error.module.scss';

function Error() {
  return (
    <Alert variant="outlined" severity="error">
      <AlertTitle className={s.title}>Server error</AlertTitle>
      <strong className={s.text}>Please try it later</strong>
    </Alert>
  );
}

export default Error;
