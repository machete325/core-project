import { IExperiment } from '../../types/project/Experiments';
import { IDataset } from '../../types/project/Datasets';
import { IProject } from '../../types/project/Project';

export type ChoosedTab = {
  type: string | undefined;
  data: IExperiment | IDataset | undefined;
  page: string;
};

interface IConfig {
  name: string;
  path: string;
}

export type Props = {
  open: boolean;
  handleClose: () => void;
  data: ChoosedTab;
  fullScreen?: boolean;
  projectData: IProject;
  config: { [key: string]: IConfig };
};
