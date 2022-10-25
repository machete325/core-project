import React, { useState, useEffect } from 'react';
import Chart from '../../../../../components/Chart/Chart';
import { IProjectData } from '../../../../../components/Modal/types';
import StatusTag from '../../../../../components/StatusTag/StatusTag';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import s from './MainMetrics.module.scss';

interface Props {
  data: IExperiment;
  projectData: IProjectData;
}

function MainMetrics({ data, projectData }: Props) {
  const [metricsData, setMetricsData] = useState<any>();
  const [metricsDataExpand, setMetricsDataExpand] = useState<any>();

  const fetchData = async () => {
    const res = await ExperimentService.getExperimentMetrics(
      projectData.id,
      data.version,
      true,
    );
    const tempData: any = [];
    Object.keys(res.data.items).forEach((key, index) => {
      if (index <= 1) {
        tempData.push(res.data.items[key]);
      }
    });
    setMetricsData(tempData);
  };

  const fetchDataExpand = async () => {
    const res = await ExperimentService.getExperimentMetrics(
      projectData.id,
      data.version,
      false,
    );
    setMetricsDataExpand(res.data.items);
  };

  useEffect(() => {
    fetchData();
    fetchDataExpand();
    return () => {
      setMetricsData(null);
      setMetricsDataExpand(null);
    };
  }, [data.id]);

  return (
    <div className={s.wrapper}>
      {metricsData && metricsDataExpand && (
        <>
          <div className={s.config_line}>
            <div className={s.config_line_title}>Metrics</div>
            <div className={s.config_line_data}>
              {metricsData.map((metric: any) => (
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
          {Object.keys(metricsDataExpand).map((metric) => (
            <Chart
              key={metricsDataExpand[metric].id}
              data={metricsDataExpand[metric]}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default MainMetrics;
