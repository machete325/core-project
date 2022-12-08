import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectStatus from '../ProjectStatus/ProjectStatus';
import OpenButton from '../OpenButton/OpenButton';
import ProjectTabs from '../ProjectTabs/ProjectTabs';
import { Props } from './types';
import ProjectVersion from '../ProjectVersion/ProjectVersion';
import MonitoringLastUpdate from '../MonitoringComponents/MonitoringLastUpdate/MonitoringLastUpdate';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="left" ref={ref} {...props} />,
);

function Modal({
  open,
  handleClose,
  data,
  fullScreen = false,
  projectData,
  config,
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
            padding: '24px !important',
            display: 'flex',
            justifyContent: 'space-between',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            width: fullScreen ? '100%' : '1020px',
            height: '100%',
            margin: '0 !important',
            maxHeight: '100% !important',
            maxWidth: '100% !important',
            background: '#1D1E23',
            borderRadius: '8px 0px 0px 8px',
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
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
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <ProjectTitle
            type="experiment"
            data={projectData}
            pageData={data.data}
            size="small"
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {data.data
              && 'status' in data.data
              && data.page === 'experiments' && (
                <ProjectStatus status={data.data?.status} />
            )}
            {data.data
              && 'version' in data.data
              && data.page === 'datasets' && (
                <ProjectVersion version={data.data?.version} />
            )}
            {data.data
              && 'edited' in data.data
              && data.page === 'monitoring' && (
                <MonitoringLastUpdate date={data.data.edited} />
            )}
            <OpenButton />
          </div>
        </DialogTitle>
        <DialogContent>
          <ProjectTabs
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

export default Modal;
