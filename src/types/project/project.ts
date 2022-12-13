import { IExperiment } from './Experiments';

export interface IProject {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  created: string;
  edited: string;
  isArchived: boolean;
}

export interface IProjectOverview {
  imageUrl: string | null;
  totalNumberOfExperiments: number;
  latestExperiment: IExperiment;
  latestInfrastructure: IInfrastructure;
  experimentActivity: {
    name: string | null;
    displayName: string | null;
    x: number[] | string[];
    y: number[] | string[];
  };
  experimentStatusFrequency: {
    name: string | null;
    displayName: string | null;
    x: number[] | string[];
    y: number[] | string[];
  };
  created: string;
  edited: string;
}

export interface IMachine {
  id: string;
  name: string;
  displayName: string;
  provider: string;
  status: string;
  spec: string;
  price: number;
  priceRate: string;
  displayPriceRate: string;
  accumulatedCost: number;
  currency: string;
  experimentsRunning: number;
  averageCost: number;
  averageCostRate: string;
  displayAverageCostRate: string;
  usage: {
    name: null | string;
    displayName: null | string;
    x: string[];
    y: number[];
  };
  costs: {
    name: null | string;
    displayName: null | string;
    x: string[];
    y: number[];
  };
}

export interface IInfrastructure {
  id?: string;
  trainingTime: number | ITrainingTime;
  usedBudget: number;
  totalBudget: number;
  currency: string;
  usedMachines: number;
  totalMachines: number;
  machines?: IMachine[];
}

export interface ITrainingTime {
  name: null | string;
  displayName: null | string;
  x: string[];
  y: number[];
}

export interface IRecently {
  id: number;
  category: string;
  name: string;
  check: boolean;
}
