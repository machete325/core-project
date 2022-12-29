import React from 'react';
import { IExperiment } from '../../../../../types/project/experiments';
import { IProject } from '../../../../../types/project/project';
import s from './Plots.module.scss';

interface Props {
  data: IExperiment;
  projectData: IProject;
}

function Plots({ data, projectData }: Props) {
  console.log(data, projectData);
  return <div className={s.wrapper}>Plots</div>;
}

export default Plots;
