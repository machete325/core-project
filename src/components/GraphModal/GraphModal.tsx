import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DialogActions } from '@mui/material';
import { Props } from './types';
import BreadcrumbsContainer from '../Breadcrumbs/BreadcrumbsContainer';
import s from './GraphModal.module.scss';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import StatusIndicator from '../StatusIndicator/StatusIndicator';

function GraphModal({
  open, handleClose, projectData, Content,
}: Props) {
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          container: {
            justifyContent: 'flex-end',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            padding: '24px 24px 0 24px !important',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            width: '100%',
            height: '100%',
            margin: '0 !important',
            maxHeight: '100% !important',
            maxWidth: '100% !important',
            background: '#1D1E23',
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: '#0e0e0e',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#4e4e52',
            },
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '0',
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <div className={s.navigation_bar}>
            <BreadcrumbsContainer data={projectData} />
          </div>
          <DialogActions>
            <button
              className={s.button_close}
              onClick={handleClose}
              type="button"
            >
              <img src="/images/icons/X.svg" alt="X" />
            </button>
          </DialogActions>
        </DialogTitle>
        <DialogContent>
          <div className={s.title}>
            <ProjectTitle data={projectData} created />
            <StatusIndicator isArchive={projectData.isArchive} />
          </div>
          <div className={s.content_container}>
            <Content />
          </div>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default GraphModal;
