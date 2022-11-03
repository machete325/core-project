import React, { ReactNode } from 'react';
import StatusTag from '../../../../components/StatusTag/StatusTag';
import { showDisplayData } from '../../../../core/helpers/formatConfiguration';
import s from './Experiments.module.scss';

interface IInfrastructure {
  currency: string;
  totalBudget: number;
  totalMachines: number;
  trainingTime: number;
  usedBudget: number;
  usedMachines: number;
}

/* {
      name: name of experiment section,
      path: path to information on experiment data,
      mainInfoFields: fields for showing main information,
      formattingFunction: function for formatting data,
    }
  */

const experimentConfig = {
  description: {
    name: 'Description',
    path: '.description',
    mainInfoFields: [],
    formattingFunction: undefined,
  },
  target: {
    name: 'Target',
    path: '.target',
    mainInfoFields: [],
    formattingFunction: undefined,
  },
  data: {
    name: 'Data',
    path: '.data',
    mainInfoFields: [],
    formattingFunction: (data: any) => {
      const { displayName, prefix, version } = data;
      return [
        {
          value: `${displayName} ${prefix || ''} ${version || ''}`,
        },
      ];
    },
  },
  metrics: {
    name: 'Main Metrics',
    path: '.metrics.items',
    mainInfoFields: ['displayName', 'value'],
    formattingFunction: (metrics: any) => {
      const data: any = {};
      Object.values(metrics).forEach((metric: any) => {
        if (metric.display) {
          const value = (
            <>
              <span className={s.title_metrics}>{metric.displayName}</span>
              <StatusTag
                usedValue={metric.value}
                totalValue={metric.threshold}
              />
            </>
          );
          data[metric.id] = {
            value,
            isTitle: false,
            textClass: s.metrics_text,
          };
        }
        return null;
      });
      return data;
    },
  },
  configuration: {
    name: 'Model configuration',
    path: '.configuration.items',
    mainInfoFields: ['displayName', 'value'],
    formattingFunction: (configuration: unknown) => showDisplayData(configuration),
  },
  infrastructure: {
    name: 'Infrastructure',
    path: '.infrastructure',
    mainInfoFields: [],
    formattingFunction: (infrastructure: IInfrastructure) => {
      interface ITempObj {
        trained: { value: ReactNode; isTitle: boolean };
        avg: { value: ReactNode; isTitle: boolean };
        used: { value: ReactNode; isTitle: boolean };
      }

      const tempObj: ITempObj = {
        trained: { value: null, isTitle: true },
        avg: { value: null, isTitle: true },
        used: { value: null, isTitle: false },
      };
      tempObj.trained.value = (
        <>
          <span className={s.title_key}>Trained in:</span>
          {` ${infrastructure.trainingTime}`}
        </>
      );
      tempObj.avg.value = (
        <>
          <span className={s.title_key}>Avg. cost:</span>
          <StatusTag
            usedValue={infrastructure.usedBudget}
            totalValue={infrastructure.totalBudget}
            currency={infrastructure.currency}
          />
        </>
      );
      tempObj.used.value = (
        <span className={s.title_key}>
          {`Used ${infrastructure.usedMachines}/${infrastructure.totalMachines} VMs`}
        </span>
      );
      return tempObj;
    },
  },
  last_commit: {
    name: 'Commit Description',
    path: '.code.commitMessage',
    mainInfoFields: [],
    formattingFunction: undefined,
  },
};

export default experimentConfig;
