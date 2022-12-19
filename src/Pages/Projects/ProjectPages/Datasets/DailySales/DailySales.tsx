import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../types/project/datasets';
import s from './DailySales.module.scss';

interface Props {
  data: IDataset;
}

function DailySales({ data }: Props) {
  console.log(data);
  return (
    <div>
      <div className={s.mock_container}>
        <div className={s.title}>Item daily sales histogram</div>
        <ToBeImpelemented
          element={(
            <img
              alt="descritpion"
              src="/images/mock/datasets/item-daily-sailes.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.mock_container}>
        <div className={s.title}>
          Item daily sales probability density function
        </div>
        <ToBeImpelemented
          element={(
            <img
              alt="descritpion"
              src="/images/mock/datasets/item-daily-sailes-probability.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
    </div>
  );
}

export default DailySales;
