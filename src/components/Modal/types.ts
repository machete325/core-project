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
}

export type Props = {
  open: boolean;
  handleClose: () => void;
  data: ChoosedTab;
  fullScreen?: boolean;
  projectData: IProjectData;
  config: Object;
};
