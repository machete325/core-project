import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';

export default function DismissAction() {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => {
        closeSnackbar();
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
}
