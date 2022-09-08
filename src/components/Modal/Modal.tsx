import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import { IExperimentData } from '../../core/redux/experiments/types';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectStatus from '../ProjectStatus/ProjectStatus';
import OpenButton from '../OpenButton/OpenButton';
import ProjectTabs from '../ProjectTabs/ProjectTabs';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="left" ref={ref} {...props} />,
);

export type ChoosedTab = {
  type: string | undefined;
  data: IExperimentData | undefined;
  page: string;
};

type Props = {
  open: boolean;
  handleClose: () => void;
  data: ChoosedTab;
  fullScreen?: boolean;
  projectData: { id: string; name: string; page: string; description: string };
  config: Object;
};

function Modal({
  open, handleClose, data, fullScreen = false, projectData, config,
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
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <ProjectTitle data={projectData} size="small" />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProjectStatus status={data.data?.status} />
            <OpenButton />
          </div>
        </DialogTitle>
        <DialogContent>
          <ProjectTabs config={config} defaultTab={data.type} />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default Modal;
