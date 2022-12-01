import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
}

function JupyterView({ data }: Props) {
  console.log(data);
  return (
    <div>
      <ToBeImpelemented element="JupyterView" color="primary" />
    </div>
  );
}

export default JupyterView;
