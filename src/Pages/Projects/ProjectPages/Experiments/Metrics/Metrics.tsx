import React, { useState, useEffect } from 'react';
import Chart from '../../../../../components/Chart/Chart';
import Loader from '../../../../../components/Loader/Loader';
import StatusTag from '../../../../../components/StatusTag/StatusTag';
import { IExperiment } from '../../../../../types/project/experiments';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import { IProject } from '../../../../../types/project/project';
import s from './Metrics.module.scss';

interface Props {
  data: IExperiment;
  projectData: IProject;
}

function Metrics({ data, projectData }: Props) {
  const [metricsData, setMetricsData] = useState<any>();
  const [metricsDataExpand, setMetricsDataExpand] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

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
    try {
      setLoading(true);
      const res = await ExperimentService.getExperimentMetrics(
        projectData.id,
        data.version,
        false,
      );
      setMetricsDataExpand(res.data.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
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
      {loading ? (
        <Loader />
      ) : (
        metricsData
        && metricsDataExpand && (
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
              <div style={{ marginBottom: '32px' }}>
                <Chart
                  key={metricsDataExpand[metric].id}
                  data={metricsDataExpand[metric]}
                  type="metric-line"
                />
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}

export default Metrics;
