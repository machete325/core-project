import { IExperiment } from './experiments';
import { IInfrastructure } from './infrastructure';

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

export interface IRecently {
  id: number;
  category: string;
  name: string;
  check: boolean;
}
