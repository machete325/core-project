import { IProject } from '../../types/project/Project';

export type Props = {
  open: boolean;
  handleClose: () => void;
  projectData: IProject;
  Content: any;
  contentProps: any;
};
