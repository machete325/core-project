import React from 'react';
import s from './MonitoringStatus.module.scss';

interface Props {
  status: 'GREEN' | 'RED';
  variant?: 'modal';
}

function MonitoringStatus({ status, variant }: Props) {
  switch (status) {
    case 'GREEN': {
      if (variant === 'modal') {
        return <span className={s.green_modal} />;
      }
      return (
        <div className={s.wrapper}>
          <div className={s.green} />
        </div>
      );
    }
    case 'RED': {
      if (variant === 'modal') {
        return <span className={s.red_modal} />;
      }
      return (
        <div className={s.wrapper}>
          <div className={s.red} />
        </div>
      );
    }
    default:
      return null;
  }
}

export default MonitoringStatus;
