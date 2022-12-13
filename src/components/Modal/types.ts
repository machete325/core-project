import { IExperiment } from '../../types/project/experiments';
import { IDataset } from '../../types/project/datasets';
import { IProject } from '../../types/project/project';
import { IMonitoring } from '../../types/project/monitoring';

export type ChoosedTab = {
  type: string | undefined;
  data: IExperiment | IDataset | IMonitoring | undefined;
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
