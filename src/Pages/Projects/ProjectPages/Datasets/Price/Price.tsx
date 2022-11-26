import React from 'react';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function Price({ data }: Props) {
  console.log(data);
  return <div>Price</div>;
}

export default Price;
