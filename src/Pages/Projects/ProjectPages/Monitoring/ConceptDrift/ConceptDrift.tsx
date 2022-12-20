import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoring } from '../../../../../types/project/monitoring';
import s from './ConceptDrift.module.scss';

interface Props {
  data: IMonitoring;
}

function ConceptDrift({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      <div className={s.data_container}>
        {/* <StatisticProperties
          data={mockData.conceptDrift.statistics.statisticProperties}
          title="Overview of the data used in production"
        /> */}
        <div className={s.title}>
          Overview of the predictions made in production
        </div>
        <ToBeImpelemented
          element={(
            <img
              alt="Overview of the predictions made in production"
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
            <img alt="outliers" src="/images/mock/monitoring/outliers.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
      {/* {mockData.conceptDrift.timeseries.map((item: any) => (
        <div className={s.data_container}>
          <div className={s.title}>{`Data Drift ${item.displayName}`}</div>
          <Chart data={item.subplots} type="monitoring-drift" />
        </div>
      ))}
      {mockData.conceptDrift.distributions.map((item: any) => (
        <div className={s.data_container}>
          <div className={s.title}>
            {`Data Distribution ${item.displayName}`}
            <Chart data={item.subplots} type="monitoring-distribution" />
          </div>
        </div>
      ))} */}
      <div className={s.data_container}>
        <div className={s.title}>Concept Drift KL Divergence</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Concept Drift KL Divergence"
              src="/images/mock/monitoring/data-drift-kl-divergence.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Concept Drift JS Divergence</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Concept Drift JS Divergence"
              src="/images/mock/monitoring/data-drift-js-divergence.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Concept Drift KL Statistics</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Concept Drift KL Statistics"
              src="/images/mock/monitoring/data-drift-ks-statistics.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>
          Data Distribution (Specific point in time)
        </div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Distribution (Specific point in time)"
              src="/images/mock/monitoring/data-distribution-time.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>
          Data Distribution Item Demand Forecastingions
        </div>
        <ToBeImpelemented
          element={(
            <img
              alt="Data Distribution Item Demand Forecastingions"
              src="/images/mock/monitoring/data-distribution-item-demand-forecastingions.png"
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

export default ConceptDrift;
