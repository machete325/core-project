import React, { ReactNode } from 'react';
import { getFormattedDateFromSeconds } from '../../../core/helpers/dateMethods';
import StatusTag from '../../StatusTag/StatusTag';
import s from './InfrastructureInfo.module.scss';

interface IData {
  id: number;
  value: ReactNode;
}

function InfrastructureInfo({ data, modalHandler }: any) {
  const infrastructure: IData[] = [
    {
      id: 1,
      value: (
        <>
          <span className={s.title}>Trained in:</span>
          {` ${getFormattedDateFromSeconds(data.trainingTime)}`}
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <span className={s.title}>Avg. cost:</span>
          <StatusTag
            usedValue={data.usedBudget}
            totalValue={data.totalBudget}
            currency={data.currency}
          />
        </>
      ),
    },
    {
      id: 3,
      value: (
        <span className={s.title}>
          {`Used ${data.usedMachines}/${data.totalMachines} VMs`}
        </span>
      ),
    },
  ];

  return (
    <div className={s.wrapper}>
      {infrastructure.map((item) => (
        <div
          role="presentation"
          className={`${s.container} ${modalHandler ? s.modal_call : null}`}
          key={item.id}
          onClick={
            modalHandler ? () => modalHandler('infrastructure') : undefined
          }
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default InfrastructureInfo;
