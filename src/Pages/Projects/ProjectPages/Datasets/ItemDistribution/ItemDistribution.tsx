import React from 'react';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function ItemDistribution({ data }: Props) {
  console.log(data);
  return <div>ItemDistribution</div>;
}

export default ItemDistribution;
