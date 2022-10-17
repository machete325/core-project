import React from 'react';
import s from './Target.module.scss';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';
import { IProjectData } from '../../../../../components/Modal/types';

interface Props {
  data: IExperiment;
  projectData: IProjectData;
}

function Target({ data, projectData }: Props) {
  console.log(projectData);
  return <div className={s.wrapper}>{data && data.target}</div>;
}

export default Target;
