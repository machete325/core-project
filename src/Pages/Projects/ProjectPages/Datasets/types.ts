export interface ITagsData {
  displayName: string;
  value: number | string;
}

export interface IExpandDataset {
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
  statistics: {
    generalInformation: {
      total_number_of_samples: number;
      total_number_of_columns: number;
      storage_size: number;
      storage_unit: string;
    };
    statisticProperties: {
      [key: string]: any;
    };
    outliers: {
      [key: string]: number[] | string[];
    };
  };
}
