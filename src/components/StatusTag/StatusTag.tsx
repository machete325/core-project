import React, { useState, useEffect } from 'react';
import s from './StatusTag.module.scss';

type Props = {
  usedValue: number | undefined | null;
  totalValue: number;
  height?: string;
  width?: string;
  type?: string;
  displayName?: string;
};

function StatusTag({
  usedValue, totalValue, height, width, type, displayName,
}: Props) {
  const [colors, setColors] = useState({
    backgroundColor: '#4E4E52',
    textColor: '',
  });

  const checkStatus = () => {
    if (usedValue) {
      if (usedValue / totalValue >= 0.5) {
        setColors({
          ...colors,
          backgroundColor: '#57DAD7',
          textColor: type === '2' ? '#000000' : '#333333',
        });
      } else if (usedValue / totalValue > 1) {
        setColors({ ...colors, backgroundColor: '#F51D44' });
      } else {
        setColors({
          ...colors,
          backgroundColor: '#FFD600',
          textColor: type === '2' ? '#000000' : '#333333',
        });
      }
    }
  };

  useEffect(() => {
    checkStatus();
  }, [usedValue, totalValue]);

  if (type === '2') {
    return (
      <div
        className={s.status_tag_2}
        style={{
          backgroundColor: colors.backgroundColor,
          color: colors.textColor,
          height,
          width,
        }}
      >
        <div>{displayName}</div>
        <div className={s.value_2}>{`${usedValue?.toFixed(2) || '-'} / ${totalValue}`}</div>
      </div>
    );
  }
  return (
    <span
      className={s.status_tag}
      style={{
        backgroundColor: colors.backgroundColor,
        color: colors.textColor,
        height,
        width,
      }}
    >
      {`${Number.isInteger(usedValue) ? usedValue : usedValue?.toFixed(2) || '-'} / ${totalValue}`}
    </span>
  );
}

export default StatusTag;
