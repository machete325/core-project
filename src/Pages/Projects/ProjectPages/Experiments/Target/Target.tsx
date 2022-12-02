import React from 'react';
import s from './Target.module.scss';
import { IExperiment } from '../../../../../types/project/Experiments';
import { IProject } from '../../../../../types/project/Project';

interface Props {
  data: IExperiment;
  projectData: IProject;
}

function Target({ data, projectData }: Props) {
  console.log(projectData);
  return <div className={s.wrapper}>{data && data.target}</div>;
}

export default Target;
