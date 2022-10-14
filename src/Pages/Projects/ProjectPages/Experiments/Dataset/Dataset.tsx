import React from 'react';
import s from './Dataset.module.scss';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';
import { IProjectData } from '../../../../../components/Modal/types';

interface Props {
  data: IExperiment;
  projectData: IProjectData;
}

function Dataset({ data, projectData }: Props) {
  console.log(projectData);
  const dataset = data.data;
  return (
    <div className={s.wrapper}>
      {dataset && (
        <>
          <div className={s.general_container}>
            <div className={s.general_title}>General information</div>
            <div className={s.config_line}>
              <div className={s.config_line_name}>
                <div>{dataset.displayName}</div>
                <div>{dataset.version}</div>
              </div>
              <div>
                <div className={s.status_tag}>1</div>
              </div>
            </div>
          </div>
          <div className={s.statistic_container}>Statistic</div>
          <div className={s.outliers_container}>Outliers</div>
        </>
      )}
    </div>
  );
}

export default Dataset;
