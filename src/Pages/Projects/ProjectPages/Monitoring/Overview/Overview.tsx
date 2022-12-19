import React, { useState, useEffect } from 'react';
import StatusTag from '../../../../../components/StatusTag/StatusTag';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoring } from '../../../../../types/project/monitoring';
import mockData from '../mockData.json';
import s from './Overview.module.scss';

interface Props {
  data: IMonitoring;
}

function Overview({ data }: Props) {
  const [metricsData, setMetricsData] = useState<any>();

  useEffect(() => {
    const tempData: any = [];
    Object.keys(mockData.experiment.metrics.items).forEach((key, index) => {
      if (index <= 1) {
        tempData.push(mockData.experiment.metrics.items[key as keyof object]);
      }
    });
    setMetricsData(tempData);
  }, [data]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Name</div>
      <div className={s.name}>{mockData.displayName}</div>
      <div className={s.config_line}>
        <div className={s.title}>Metrics</div>
        <div className={s.config_line_data}>
          {metricsData
            && metricsData.map((metric: any) => (
              <StatusTag
                key={metric.id}
                usedValue={metric.value}
                totalValue={2}
                displayName={metric.displayName}
                width="100%"
                height="68px"
                type="2"
              />
            ))}
        </div>
      </div>
      <div className={s.title}>Outliers</div>
      <ToBeImpelemented
        element={
          <img alt="outliers" src="/images/mock/monitoring/outliers.png" />
        }
        color="primary"
        backgroundBlur
      />
    </div>
  );
}

export default Overview;
