import React, { ReactNode } from 'react';
import { defineCurrency } from '../../../core/helpers/textMethods';
import { IMonitoring } from '../../../types/project/monitoring';
import StatusTag from '../../StatusTag/StatusTag';
import s from './MonitoringInfrastructure.module.scss';

interface IData {
  id: number;
  value: ReactNode;
}

type Props = {
  data: IMonitoring;
  modalHandler?: ((arg: string, key?: string) => void) | undefined;
  modalKey?: string;
  marginBottom: string;
};

function MonitoringInfrastructure({
  data,
  modalHandler,
  modalKey,
  marginBottom = '0px',
}: Props) {
  const infrastructure: IData[] = [
    {
      id: 1,
      value: (
        <>
          <span className={s.title}>Total:</span>
          {` ${defineCurrency(data.infrastructure.currency)}${
            data.infrastructure.usedBudget
          }`}
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <span className={s.title}>Avg. cost:</span>
          <StatusTag
            usedValue={data.infrastructure.usedBudget}
            totalValue={data.infrastructure.totalBudget}
            currency={data.infrastructure.currency}
          />
        </>
      ),
    },
  ];

  return (
    <div className={s.wrapper}>
      {infrastructure.map((item) => (
        <div
          role="presentation"
          key={item.id}
          onClick={
            modalHandler
              ? () => modalHandler('infrastructure', modalKey)
              : undefined
          }
          style={{ marginBottom }}
          className={`${s.container} ${modalHandler ? s.modal_call : null}`}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default MonitoringInfrastructure;
