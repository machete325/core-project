interface IMetrics {
  id: string;
  name: string;
  displayName: string;
  display: boolean;
  value: number;
  threshold: number;
  aggregationOperation: string;
}

export interface IOverviewData {
  imageUrl: string;
  totalNumberOfExperiments: number;
  latestExperiment: {
    id: string;
    name: string;
    version: string;
    projectName: string;
    description: string;
    target: string;
    data: {
      id: string;
      name: string;
      displayName: string;
      version: string;
      prefix: string;
      tag: string;
      urlDataRegistry: string;
      created: string;
      edited: string;
      isArchived: boolean;
    };
    metrics: {
      items: { [key: string]: IMetrics };
    };
    configuration: {
      items: { [key: string]: any };
    };
    infrastructure: {
      id: string;
      trainingTime: number;
      usedBudget: number;
      totalBudget: number;
      currency: string;
      usedMachines: number;
      totalMachines: number;
    };
    code: {
      name: string;
      version: string;
      commitMessage: string;
    };
    status: string;
  };
  latestInfrastructure: {
    id: string;
    trainingTime: number;
    usedBudget: number;
    totalBudget: number;
    currency: string;
    usedMachines: number;
    totalMachines: number;
  };
  created: string;
  edited: string;
  totalNumberOfDatasets: number;
  totalNumberOfMonitoringModels: number;
  errorReporting: number;
  userFit: number;
  experimentActivityFrequency: {
    [key: string]: number;
  };
  experimentStatusDistribution: {
    completed: number;
  };
}
