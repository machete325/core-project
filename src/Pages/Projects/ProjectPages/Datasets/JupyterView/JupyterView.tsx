import React from 'react';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function JupyterView({ data }: Props) {
  console.log(data);
  return <div>JupyterView</div>;
}

export default JupyterView;
