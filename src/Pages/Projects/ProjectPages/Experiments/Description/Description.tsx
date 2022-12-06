import React from 'react';
import s from './Description.module.scss';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';

interface Props {
  data: IExperiment;
}

function Description({ data }: Props) {
  return <div className={s.wrapper}>{data && data.description}</div>;
}

export default Description;
