import React from 'react';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function DailySales({ data }: Props) {
  console.log(data);
  return <div>DailySales</div>;
}

export default DailySales;
