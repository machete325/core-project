import React from 'react';
import { IMonitoring } from '../../../../../types/project/Monitoring';
import s from './DataDrift.module.scss';

interface Props {
  data: IMonitoring;
}

function DataDrift({ data }: Props) {
  console.log(data);
  return <div className={s.wrapper}>DataDrift</div>;
}

export default DataDrift;
