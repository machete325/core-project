import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoring } from '../../../../../types/project/monitoring';
import s from './DataDrift.module.scss';

interface Props {
  data: IMonitoring;
}

function DataDrift({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      <div className={s.data_container}>
        {/* <StatisticProperties
          data={mockData.dataDrift.statistics.statisticProperties}
          title="Overview of the data used in production"
        /> */}
        <div className={s.title}>Overview of the data used in production</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Overview of the data used in production"
              src="/images/mock/monitoring/table.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Outliers</div>
        <ToBeImpelemented
          element={
            <img alt="Outliers" src="/images/mock/monitoring/outliers.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
      {/* {mockData.dataDrift.timeseries.map((item: any) => (
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
      ))} */}
      <div className={s.data_container}>
        <div className={s.title}>Data Drift KL Divergence</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Drift KL Divergence"
              src="/images/mock/monitoring/data-drift-kl-divergence.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Data Drift JS Divergence</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Drift JS Divergence"
              src="/images/mock/monitoring/data-drift-js-divergence.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Data Drift KS Statistics</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Drift KS Statistics"
              src="/images/mock/monitoring/data-drift-ks-statistics.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Data Distribution Item Price</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Distribution Item Price"
              src="/images/mock/monitoring/data-distribution-item-price.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Data Distribution Item Daily Sales</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Distribution Item Daily Sales"
              src="/images/mock/monitoring/data-distribution-item-daily-sales.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
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
