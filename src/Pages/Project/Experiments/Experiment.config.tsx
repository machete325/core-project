import React from 'react';
import StatusTag from '../../../components/StatusTag/StatusTag';
import s from './Experiments.module.scss';

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
  dataset: {
    name: 'Data',
    path: '.dataset.name',
    mainInfoFields: [],
    formattingFunction: undefined,
  },
  metrics: {
    name: 'Main Metrics',
    path: '.metrics.items',
    mainInfoFields: ['displayName', 'value'],
    formattingFunction: undefined,
  },
  configuration: {
    name: 'Model configuration',
    path: '.configuration.items',
    mainInfoFields: ['displayName', 'value'],
    formattingFunction: (configuration: any) => {
      const formattedData: any = [];
      let arrKey: any = 11885133;

      const checkObjectKey = (key: any, value: any = null, id?: any, isArray?: boolean) => {
        // eslint-disable-next-line no-plusplus
        const index = id || arrKey++;

        if ((isArray || (Number(key) !== 0 && !!Number(key) !== true)) && key !== 'name') {
          formattedData.push({
            id: index,
            displayName: isArray ? '' : `${key}:`,
            // eslint-disable-next-line no-nested-ternary
            value: isArray
              ? `- ${key}`
              : typeof value === 'boolean' || typeof value === 'number'
                ? `${value}`
                : value || '',
          });
        }
      };

      const unfoldObject = (field: any) => {
        let obj: any = {};
        Object.keys(field).forEach((key: any) => {
          obj = { ...field[key] };
        });
        return obj;
      };

      const formatConfiguration = (items: any) => {
        if (Array.isArray(items)) {
          items.forEach((item) => {
            const {
              displayName, value, id, display,
            } = item;
            if (display) {
              checkObjectKey(displayName, value, id);
            }
          });
        } else if (Object.prototype.hasOwnProperty.call(items, 'displayName')) {
          const {
            displayName, value, id, display,
          } = items;
          if (display) {
            checkObjectKey(displayName, value, id);
          }
        } else {
          const result = Object.keys(items).length === 1 ? unfoldObject(items) : items;
          const keys = Object.keys(result);
          if (Object.prototype.hasOwnProperty.call(result, 'displayName')) {
            const {
              displayName, value, id, display,
            } = result;
            if (display) {
              checkObjectKey(displayName, value, id);
            }
          } else if (keys.length > 1) {
            keys.forEach((item) => formatConfiguration(result[item]));
          } else if (keys.length === 1) {
            formatConfiguration(result);
          }
        }
      };
      formatConfiguration(configuration);
      return formattedData;
    },
  },
  infrastructure: {
    name: 'Infrastructure',
    path: '.infrastructure',
    mainInfoFields: [],
    formattingFunction: (infrastructure: any) => {
      const tempObj: any = {
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
