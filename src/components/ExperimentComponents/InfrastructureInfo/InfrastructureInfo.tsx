import React, { ReactNode } from 'react';
import { getFormattedDateFromSeconds } from '../../../core/helpers/dateMethods';
import StatusTag from '../../StatusTag/StatusTag';
import s from './InfrastructureInfo.module.scss';

interface IData {
  id: number;
  value: ReactNode;
}

type Props = {
  data: any;
  modalHandler: ((arg: string, key?: string) => void) | undefined;
  modalKey?: string;
  marginBottom: string;
};

function InfrastructureInfo({
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

export default InfrastructureInfo;
