import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../types/project/Datasets';
import s from './JupyterView.module.scss';

interface Props {
  data: IDataset;
}

function JupyterView({ data }: Props) {
  console.log(data);
  return (
    <div>
      <div className={s.mock_container}>
        <div className={s.title}>item_id distribution</div>
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
