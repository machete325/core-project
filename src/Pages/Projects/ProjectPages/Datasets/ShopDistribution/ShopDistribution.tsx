import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../types/project/datasets';
import s from './ShopDistribution.module.scss';

interface Props {
  data: IDataset;
}

function ShopDistribution({ data }: Props) {
  console.log(data);
  return (
    <div>
      <div className={s.mock_container}>
        <div className={s.title}>Shop_id distribution</div>
        <ToBeImpelemented
          element={(
            <img
              alt="descritpion"
              src="/images/mock/datasets/shop-distribution.png"
            />
          )}
          color="primary"
        />
      </div>
    </div>
  );
}

export default ShopDistribution;
