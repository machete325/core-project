import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../types/project/datasets';
import s from './JupyterView.module.scss';

interface Props {
  data: IDataset;
}

function JupyterView({ data }: Props) {
  console.log(data);
  return (
    <div>
      <div className={s.mock_container}>
        <ToBeImpelemented
          element={(
            <img
              alt="descritpion"
              src="/images/mock/datasets/jupyter-view.png"
            />
          )}
          color="primary"
        />
      </div>
    </div>
  );
}

export default JupyterView;
