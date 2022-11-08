export interface IProjectData {
  id: string;
  name: string;
  page: string;
  description: string;
  created: string;
  isArchive: boolean;
}

export type Props = {
  open: boolean;
  handleClose: () => void;
  projectData: IProjectData;
  Content: any;
  contentProps: any;
};
