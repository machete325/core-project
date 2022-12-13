export interface IDataset {
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
}

export interface IExpandDataset extends IDataset {
  statistics: {
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
    outliers: {
      item_price_low: number[];
      item_price_high: number[];
      item_cnt_day_low: number[];
      item_cnt_day_high: number[];
    };
  };
}

export interface ITagsData {
  displayName: string;
  value: number | string;
}

export interface IExpandDatasets {
  [key: string]: IExpandDataset & { checked: boolean };
}

export interface IDatasets {
  [key: string]: IDataset & { checked: boolean };
}
