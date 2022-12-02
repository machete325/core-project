import { IDataset, IExpandDataset } from './Datasets';
import { IInfrastructure } from './Project';

export interface IMetric {
  id: string;
  name: string;
  displayName: string;
  display: boolean;
  value: number;
  threshold: number;
  aggregationOperation: string;
}

export interface IExperiment {
  id: string;
  name: string;
  version: string;
  projectName: string;
  description: string;
  target: string;
  data: IDataset;
  metrics: {
    items: { [key: string]: IMetric };
  };
  configuration: {
    items: any;
  };
  infrastructure: IInfrastructure;
  code: {
    commitMessage: string | null;
  };
  status: string;
}

export interface IExperimentData {
  [key: string]: IExperiment & { checked: boolean };
}

export interface IExpandExperiment extends IExperiment {
  data: IExpandDataset;
}
