import React from 'react';
import { IMonitoring } from '../../../../../types/project/monitoring';
import s from './Overview.module.scss';

interface Props {
  data: IMonitoring;
}

function Overview({ data }: Props) {
  console.log(data);
  return <div className={s.wrapper}>Overview</div>;
}

export default Overview;
