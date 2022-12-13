import React from 'react';
import s from './OverviewStatusTag.module.scss';

type Props = {
  data: any;
  config: {
    displayName: string;
    color: string;
    label: string;
    labelType: 'monitoring' | 'experiments' | 'trend' | 'datasets';
    inPercents: boolean;
  };
  label: any;
};

export default function OverviewStatusTag({ data, config, label }: Props) {
  const formattedData = (value: any) => {
    if (config.inPercents) {
      return `${value * 100}%`;
    }
    return value;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div
          className={s.content_bar}
          style={{ backgroundColor: config.color }}
        />
        <div className={s.text_container}>
          <div className={s.text}>
            <div className={s.value}>{formattedData(data)}</div>
            <div>{config.displayName}</div>
          </div>
          <div className={s.label} style={{ color: label.color }}>
            {label.text}
          </div>
        </div>
      </div>
    </div>
  );
}
