import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { VariantType, useSnackbar } from 'notistack';
import { ProjectService } from '../../../core/services/projects/Project.service';
import { oneProjectData } from '../../../core/redux/projects/selectors';
import s from './DropDown.module.scss';

const theme = createTheme({
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          fontFamily: 'Open Sans',
          justifyContent: 'center',
          color: 'white',
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
          width: '500px',
          height: '200px',
          margin: '0 !important',
          maxHeight: '100% !important',
          maxWidth: '100% !important',
          background: '#1D1E23',
          borderRadius: '8px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
  },
});

type Props = {
  open: boolean;
  handleClose: () => void;
};

function Modal({ open, handleClose }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const projectData = useSelector(oneProjectData);

  const handleShowSnackBar = (variant: VariantType, text: string) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(text, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    });
  };

  const uploadImage = async () => {
    if (selectedFile) {
      if (
        selectedFile.type === 'image/jpg'
        || selectedFile.type === 'image/png'
        || selectedFile.type === 'image/jpeg'
      ) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        try {
          setLoading(true);
          const res = await ProjectService.uploadProjectPhoto(
            projectData.id,
            formData,
          );
          if (res.status === 200) {
            handleShowSnackBar('success', 'Photo successful uploaded');
          }
        } catch (e: any) {
          if (e.details) {
            handleShowSnackBar('error', e.details);
          } else {
            handleShowSnackBar('error', 'Error connection');
          }
        } finally {
          setSelectedFile(null);
          setLoading(false);
          handleClose();
        }
      } else {
        handleShowSnackBar('error', 'Incorrect image file');
      }
    }
  };

  const handleFileSelect = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Change project photo</DialogTitle>
        <DialogContent>
          <input
            type="file"
            onChange={handleFileSelect}
            accept="image/png, image/jpeg"
            className={s.image_input}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ fontSize: '16px' }} onClick={handleClose}>
            Close
          </Button>
          <Box sx={{ position: 'relative' }}>
            <Button
              disabled={loading}
              style={{ fontSize: '16px' }}
              onClick={uploadImage}
            >
              Accept
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: '#ffffff',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default Modal;
