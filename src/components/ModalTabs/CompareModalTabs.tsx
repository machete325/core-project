import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CompareProps } from './types';
import ProjectCompareTabs from '../ProjectTabs/ProjectCompareTabs';
import s from './ModalTabs.module.scss';
import BreadcrumbsContainer from '../Breadcrumbs/BreadcrumbsContainer';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import StatusIndicator from '../StatusIndicator/StatusIndicator';

function CompareModalTabs({
  open,
  handleClose,
  data,
  projectData,
  config,
}: CompareProps) {
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
            padding: '24px !important',
            justifyContent: 'space-between',
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
            borderRadius: 0,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
              backgroundColor: '#0e0e0e',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#4e4e52',
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <div className={s.title}>
            <div className={s.navigation_bar}>
              <BreadcrumbsContainer
                data={projectData}
                lastElement={`${data.page} comparison (${data.amountCompareItems})`}
                projectData={projectData}
              />
            </div>
            <button
              className={s.button_close}
              onClick={handleClose}
              type="button"
            >
              <img src="/images/icons/X.svg" alt="X" />
            </button>
          </div>
          <div className={s.project_title}>
            <ProjectTitle
              type="comparising"
              data={projectData}
              page={`${data.page} comparison (${data.amountCompareItems})`}
              created
            />
            {projectData && (
              <StatusIndicator isArchive={projectData.isArchived} />
            )}
          </div>
        </DialogTitle>
        <DialogContent>
          <ProjectCompareTabs
            config={config}
            defaultTab={data.type}
            data={data.data}
            projectData={projectData}
            page={data.page}
          />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default CompareModalTabs;
