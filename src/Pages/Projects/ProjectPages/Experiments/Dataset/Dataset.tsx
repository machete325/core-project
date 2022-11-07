import React, { useState, useEffect } from 'react';
import GeneralInfo from '../../../../../components/GeneralInfo/GeneralInfo';
import StatisticProperties from '../../../../../components/StatisticProperties/StatisticProperties';
import { IExpandDataset, ITagsData } from './types';
import s from './Dataset.module.scss';

export interface Props {
  expandData: IExpandDataset;
}

function Dataset({ expandData }: Props) {
  const [tagsData, setTagsData] = useState<undefined | ITagsData[]>();

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

  useEffect(() => {
    getTagsData();
  }, [expandData]);

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

  return (
    <>
      <div className={s.title}>General information</div>
      {tagsData && (
        <GeneralInfo
          displayName={expandData.displayName}
          version={expandData.version}
          tagsData={tagsData}
        />
      )}
      <div className={s.statistic}>
        {expandData && (
          <>
            <div className={s.title}>Statistic Properties</div>
            {expandData.statistics.statisticProperties && (
              <StatisticProperties
                data={expandData.statistics.statisticProperties}
              />
            )}
          </>
        )}
      </div>
      <div className={s.outliers}>
        <div className={s.title}>Outliers</div>
        <div>{getOutliers()}</div>
      </div>
    </>
  );
}

export default Dataset;
