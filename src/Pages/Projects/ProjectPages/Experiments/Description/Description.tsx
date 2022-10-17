import React from 'react';
import s from './Description.module.scss';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';
import { IProjectData } from '../../../../../components/Modal/types';

interface Props {
  data: IExperiment;
  projectData: IProjectData;
}

function Description({ data, projectData }: Props) {
  console.log(projectData);
  return <div className={s.wrapper}>{data && data.description}</div>;
}

export default Description;
