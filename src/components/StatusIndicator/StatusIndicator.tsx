import React from 'react';
import s from './StatusIndicator.module.scss';

type Props = {
  isArchive: boolean;
};

function StatusIndicator({ isArchive }: Props) {
  return <div className={s.wrapper}>{isArchive ? 'NotActive' : 'Active'}</div>;
}

export default StatusIndicator;
