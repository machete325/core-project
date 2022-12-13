import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../types/project/datasets';
import s from './CategoryDistribution.module.scss';

interface Props {
  data: IDataset;
}

function CategoryDistribution({ data }: Props) {
  console.log(data);
  return (
    <div>
      <div className={s.mock_container}>
        <div className={s.title}>item_category_id distribution</div>
        <ToBeImpelemented
          element={(
            <img
              alt="descritpion"
              src="/images/mock/datasets/item-category-distribution.png"
            />
          )}
          color="primary"
        />
      </div>
    </div>
  );
}

export default CategoryDistribution;
