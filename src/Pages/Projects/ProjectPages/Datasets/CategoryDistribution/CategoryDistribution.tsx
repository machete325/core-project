import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function CategoryDistribution({ data }: Props) {
  console.log(data);
  return (
    <div>
      <ToBeImpelemented element="Category Distribution" color="primary" />
    </div>
  );
}

export default CategoryDistribution;
