import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../types/project/datasets';
import s from './Price.module.scss';

interface Props {
  data: IDataset;
}

function Price({ data }: Props) {
  console.log(data);
  return (
    <div>
      <div className={s.mock_container}>
        <div className={s.title}>Item price histogram</div>
        <ToBeImpelemented
          element={
            <img alt="descritpion" src="/images/mock/datasets/item-price.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.mock_container}>
        <div className={s.title}>Item price probability density function</div>
        <ToBeImpelemented
          element={(
            <img
              alt="descritpion"
              src="/images/mock/datasets/item-price-probability.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
    </div>
  );
}

export default Price;
