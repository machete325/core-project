import React, { useState, useEffect } from 'react';
import s from './StatusTag.module.scss';

type Props = {
  usedValue: number | undefined | null;
  totalValue: number | undefined | null;
  height?: string;
  width?: string;
  type?: string;
  displayName?: string;
  currency?: string;
};

function StatusTag({
  usedValue,
  totalValue,
  height,
  width,
  type,
  displayName,
  currency,
}: Props) {
  const [colors, setColors] = useState({
    backgroundColor: '#4E4E52',
    textColor: '',
  });

  const defineCurrency = (currencyType: string) => {
    switch (currencyType) {
      case 'USD': {
        return '$';
      }
      default:
        return '';
    }
  };

  const checkStatus = () => {
    if (usedValue && totalValue) {
      if (usedValue / totalValue >= 0.5 && usedValue / totalValue <= 1) {
        setColors({
          ...colors,
          backgroundColor: '#57DAD7',
          textColor: type === '2' ? '#000000' : '#333333',
        });
      } else if (usedValue / totalValue > 1) {
        setColors({
          ...colors,
          backgroundColor: '#F51D44',
          textColor: '#FFFFFF',
        });
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
        <div className={s.value_2}>
          {`${usedValue?.toFixed(2) || '-'} / ${totalValue}`}
        </div>
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
      {`${currency ? defineCurrency(currency) : ''}${
        Number.isInteger(usedValue) ? usedValue : usedValue?.toFixed(2) || '-'
      } / ${currency ? defineCurrency(currency) : ''}${totalValue || '-'}`}
    </span>
  );
}

export default StatusTag;
