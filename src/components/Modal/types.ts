import { IExperiment } from '../../core/redux/projects/experiments/types';

export type ChoosedTab = {
  type: string | undefined;
  data: IExperiment | undefined;
  page: string;
};

export interface IProjectData {
  id: string;
  name: string;
  page: string;
  description: string;
  created: string;
}

interface IConfig {
  formattingFunction: any;
  name: string;
  path: string;
  mainInfoFields: string[];
}

export type Props = {
  open: boolean;
  handleClose: () => void;
  data: ChoosedTab;
  fullScreen?: boolean;
  projectData: IProjectData;
  config: { [key: string]: IConfig };
};
