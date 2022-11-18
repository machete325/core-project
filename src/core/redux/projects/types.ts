export interface IRecently {
  id: number;
  category: string;
  name: string;
  check: boolean;
}

export interface IMetric {
  id: string;
  name: string;
  displayName: string;
  display: boolean;
  value: number;
  threshold: number;
  aggregationOperation: string;
}

export interface IOverview {
  imageUrl: string | null;
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
      items: { [key: string]: IMetric };
    };
    configuration: {
      items: any;
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
}
