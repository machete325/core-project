import React from 'react';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function CategoryDistribution({ data }: Props) {
  console.log(data);
  return <div>CategoryDistribution</div>;
}

export default CategoryDistribution;
