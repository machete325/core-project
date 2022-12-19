import React from 'react';
import Chart from '../../../../../components/Chart/Chart';
import Outliers from '../../../../../components/DatasetComponents/Outliers/Outliers';
import StatisticProperties from '../../../../../components/DatasetComponents/StatisticProperties/StatisticProperties';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoring } from '../../../../../types/project/monitoring';
import mockData from '../mockData.json';
import s from './DataDrift.module.scss';

interface Props {
  data: IMonitoring;
}

function DataDrift({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      <div className={s.data_container}>
        <StatisticProperties
          data={mockData.dataDrift.statistics.statisticProperties}
          title="Overview of the data used in production"
        />
      </div>
      <div className={s.data_container}>
        <Outliers data={mockData.dataDrift.statistics.outliers} />
      </div>
      {mockData.dataDrift.timeseries.map((item: any) => (
        <div className={s.data_container}>
          <div className={s.title}>{`Data Drift ${item.displayName}`}</div>
          <Chart data={item.subplots} type="monitoring-drift" />
        </div>
      ))}
      {mockData.dataDrift.distributions.map((item: any) => (
        <div className={s.data_container}>
          <div className={s.title}>
            {`Data Distribution ${item.displayName}`}
            <Chart data={item.subplots} type="monitoring-distribution" />
          </div>
        </div>
      ))}
      <div className={s.data_container}>
        <div className={s.title}>item_id</div>
        <ToBeImpelemented
          element={
            <img alt="item-id" src="/images/mock/monitoring/item-id.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>item_category_id</div>
        <ToBeImpelemented
          element={(
            <img
              alt="item-category-id"
              src="/images/mock/monitoring/item-category-id.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>shop_id</div>
        <ToBeImpelemented
          element={
            <img alt="shop-id" src="/images/mock/monitoring/shop-id.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
    </div>
  );
}

export default DataDrift;
