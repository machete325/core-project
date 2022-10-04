interface IMetric {
  id: string;
  name: string;
  displayName: string;
  display: boolean;
  value: number;
  aggregationOperation: string;
}

export interface IExperiment {
  id: string;
  name: string;
  version: string;
  projectName: string;
  description: string;
  target: string;
  dataset: {
    id: string;
    name: string;
    version: string;
    prefix: unknown | null;
    tag: string;
  };
  metrics: {
    items: { [key: string]: IMetric };
  };
  configuration: {
    items: any
  };
  infrastructure: {
    trainingTime: number;
    usedBudget: number;
    totalBudget: number;
    currency: string;
    usedMachines: number;
    totalMachines: number;
  };
  code: {
    commitMessage: unknown | null;
  };
  status: string;
  checked: boolean;
}

export interface IExperimentData {
  [key: string]: IExperiment;
}
