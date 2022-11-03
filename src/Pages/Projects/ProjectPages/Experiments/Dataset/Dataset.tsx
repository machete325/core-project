import React, { useState, useEffect } from 'react';
import s from './Dataset.module.scss';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';
import { IProjectData } from '../../../../../components/Modal/types';
import GeneralInfo from '../../../../../components/GeneralInfo/GeneralInfo';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import StatisticProperties from '../../../../../components/StatisticProperties/StatisticProperties';
import { IExpandDataset, ITagsData } from './types';
import Loader from '../../../../../components/Loader/Loader';

export interface Props {
  data: IExperiment;
  projectData: IProjectData;
}

const mockData = {
  items: {
    '1c876c78-22ab-4d93-b381-569f75843a05': {
      id: '1c876c78-22ab-4d93-b381-569f75843a05',
      name: 'time-series-forecast-data-registry',
      displayName: 'Time Series Forecast Data Registry',
      version: 'v2.2.0',
      prefix: 'odyssey_sales_forecast',
      tag: 'odyssey_sales_forecast_v2.2.0',
      urlDataRegistry:
        'https://github.com/Coreai-org/time-series-forecast-data-registry.git',
      created: '2022-10-12T15:27:28.571223',
      edited: '2022-10-18T14:06:42.613566',
      isArchived: false,
      statistics: {
        generalInformation: {
          total_number_of_samples: 1043.0,
          total_number_of_columns: 9.0,
          storage_size: 97.0,
          storage_unit: 'mb',
        },
        statisticProperties: {
          date: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 99969.0,
            Mean: 'NaN',
            'Standard deviation': 'NaN',
            Q1: 'NaN',
            Median: 'NaN',
            Q3: 'NaN',
            'Min value': 'NaN',
            'Max value': 'NaN',
          },
          date_block_num: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 99999.0,
            Mean: 0.0,
            'Standard deviation': 0.0,
            Q1: 0.0,
            Median: 0.0,
            Q3: 0.0,
            'Min value': 0.0,
            'Max value': 0.0,
          },
          shop_id: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 99961.0,
            Mean: 27.45398,
            'Standard deviation': 16.84603758,
            Q1: 16.0,
            Median: 27.0,
            Q3: 35.0,
            'Min value': 0.0,
            'Max value': 59.0,
          },
          item_id: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 92117.0,
            Mean: 10307.29195,
            'Standard deviation': 6312.427393,
            Q1: 4481.0,
            Median: 9906.0,
            Q3: 15675.25,
            'Min value': 19.0,
            'Max value': 22168.0,
          },
          item_price: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 98201.0,
            Mean: 705.9477748,
            'Standard deviation': 1233.413878,
            Q1: 199.0,
            Median: 398.0,
            Q3: 699.0,
            'Min value': 9.0,
            'Max value': 32990.0,
          },
          item_cnt_day: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 99968.0,
            Mean: 1.14181,
            'Standard deviation': 0.6939019555,
            Q1: 1.0,
            Median: 1.0,
            Q3: 1.0,
            'Min value': -6.0,
            'Max value': 64.0,
          },
          item_category_id: {
            'Number of entries': 100000.0,
            'Number of null entries': 0.0,
            'Number of duplicates': 99945.0,
            Mean: 39.73272,
            'Standard deviation': 16.28104731,
            Q1: 30.0,
            Median: 40.0,
            Q3: 55.0,
            'Min value': 0.0,
            'Max value': 83.0,
          },
        },
        outliers: {
          item_price_low: [],
          item_price_high: [
            1709.05, 1699.0, 1708.95, 1649.0, 1799.0, 2699.0, 1709.05, 1699.0,
            1708.95, 1649.0, 1799.0, 2699.0, 1709.05, 1699.0, 1708.95, 1649.0,
            1799.0, 2699.0,
          ],
          item_cnt_day_low: [-1.0],
          item_cnt_day_high: [3.0, 2.0],
        },
      },
    },
  },
};

function Dataset({ data, projectData }: Props) {
  const [expandData, setExpandData] = useState<undefined | IExpandDataset>();
  const [tagsData, setTagsData] = useState<undefined | ITagsData[]>();
  const [loading, setLoading] = useState(false);
  const dataset = data.data;

  const getTagsData = () => {
    if (expandData) {
      const { generalInformation } = expandData.statistics;
      const tags: ITagsData[] = [
        {
          value: generalInformation.total_number_of_samples,
          displayName: 'samples',
        },
        {
          value: generalInformation.total_number_of_columns,
          displayName: 'columns',
        },
        {
          value: generalInformation.storage_size,
          displayName: generalInformation.storage_unit,
        },
      ];
      setTagsData(tags);
    }
  };

  const fetchExpandData = async () => {
    try {
      setLoading(true);
      const response = await ExperimentService.getExperimentDatasets(
        projectData.id,
        data.id,
        true,
      );
      console.log(response.data.items);
      setExpandData(mockData.items['1c876c78-22ab-4d93-b381-569f75843a05']);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  // Return Outliers markup
  const getOutliers = () => {
    if (expandData) {
      const markup = Object.entries(expandData.statistics.outliers).map(
        (item) => (
          <div key={item[0]} className={s.outliers_container}>
            <div className={s.outliers_title}>{`'${item[0]}':`}</div>
            <div className={s.outliers_value}>
              {`${JSON.stringify(item[1])}`}
            </div>
          </div>
        ),
      );
      return markup;
    }
    return null;
  };

  useEffect(() => {
    getTagsData();
  }, [expandData]);

  useEffect(() => {
    fetchExpandData();
    return () => {
      setExpandData(undefined);
    };
  }, [data.id]);

  return (
    <div className={s.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={s.title}>General information</div>
          {tagsData && dataset && (
            <GeneralInfo
              displayName={dataset.displayName}
              version={dataset.version}
              tagsData={tagsData}
            />
          )}
          <div className={s.statistic}>
            {expandData && (
              <>
                <div className={s.title}>Statistic Properties</div>
                <StatisticProperties
                  data={expandData.statistics.statisticProperties}
                />
              </>
            )}
          </div>
          <div className={s.outliers}>
            <div className={s.title}>Outliers</div>
            <div>{getOutliers()}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dataset;
