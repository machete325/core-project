import { IExpandExperiment } from './experiments';
import { IInfrastructure } from './infrastructure';
import { IProject } from './project';

export interface IMonitoring {
  id: string;
  project: IProject;
  model: IModel;
  experiment: IExpandExperiment;
  infrastructure: IInfrastructure;
  dataDriftStatus: 'GREEN' | 'RED' | any;
  conceptDriftStatus: 'GREEN' | 'RED' | any;
  infrastructureStatus: 'GREEN' | 'RED' | any;
  edited: string;
}

export interface IModel {
  id: string;
  name: string;
  version: string;
  experimentVersion: string;
  source: string;
}

export interface IOutliers {
  item_price_low: number[];
  item_price_high: number[];
  item_cnt_day_low: number[];
  item_cnt_day_high: number[];
}

export interface IStatistics {
  generalInformation: {
    total_number_of_samples: number;
    total_number_of_columns: number;
    storage_size: number;
    storage_unit: string;
  };
  statisticProperties: {
    [key: string]: {
      'Number of entries': number;
      'Number of null entries': number;
      'Number of duplicates': number;
      Mean: number;
      'Standard deviation': number;
      Q1: number;
      Median: number;
      Q3: number;
      'Min value': number;
      'Max value': number;
    };
  };
  outliers: IOutliers;
}

export interface IDrift {
  statistics: IStatistics;
  outliers: IOutliers;
  distributions: [
    {
      [key: string]: {
        name: string;
        displayName: string;
        subplots: {
          [key: string]: {
            name: string;
            displayName: string;
            x: string[];
            y: number[];
          };
        };
      };
    },
  ];
  timeseries: [
    {
      [key: string]: {
        name: string;
        displayName: string;
        subplots: {
          [key: string]: {
            name: string;
            displayName: string;
            x: string[];
            y: number[];
          };
        };
      };
    },
  ];
}

export interface IExpandMonitoringItem extends IMonitoring {
  dataDrift: IDrift;
  conceptDrift: IDrift;
}

export interface IExpandMonitoring {
  [key: string]: IExpandMonitoringItem;
}

export interface IMonitoringItems {
  [key: string]: IMonitoring & { checked: boolean };
}
