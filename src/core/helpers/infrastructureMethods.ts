import { IMachine } from '../../types/project/project';

export const genMachineChartData = (machine: IMachine) => ({
  id: machine.id,
  displayName: `Hours used and Costs - Cloud: ${machine.displayName}`,
  value: { costs: machine.costs, usage: machine.usage },
});

export const genTrainingTime = (trainingTime: any) => ({
  displayName: 'Training time',
  value: { trainingTime },
});
