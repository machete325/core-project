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

export interface IInfrastructureItems {
  [key: string]: IInfrastructure & { checked: boolean };
}
