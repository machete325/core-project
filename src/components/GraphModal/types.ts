import { IProject } from '../../types/project/project';

export type Props = {
  open: boolean;
  handleClose: () => void;
  projectData: IProject;
  Content: any;
  contentProps: any;
};
