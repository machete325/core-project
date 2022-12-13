import React from 'react';
import { getFormattedDateFromTimeStamp } from '../../../core/helpers/dateMethods';
import s from './MonitoringLastUpdate.module.scss';

interface Props {
  date: string;
}

function MonitoringLastUpdate({ date }: Props) {
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Last updated:</span>
      {getFormattedDateFromTimeStamp(date)}
    </div>
  );
}

export default MonitoringLastUpdate;
