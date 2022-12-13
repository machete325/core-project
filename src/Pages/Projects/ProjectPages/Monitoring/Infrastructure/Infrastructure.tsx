import React from 'react';
import { IMonitoring } from '../../../../../types/project/Monitoring';
import s from './Infrastructure.module.scss';

interface Props {
  data: IMonitoring;
}

function Infrastructure({ data }: Props) {
  console.log(data);
  return <div className={s.wrapper}>Infrastructure</div>;
}

export default Infrastructure;
