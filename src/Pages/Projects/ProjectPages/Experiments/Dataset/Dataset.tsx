import React, { useState, useEffect } from 'react';
import GeneralInfo from '../../../../../components/DatasetComponents/GeneralInfo/GeneralInfo';
import StatisticProperties from '../../../../../components/DatasetComponents/StatisticProperties/StatisticProperties';
import Outliers from '../../../../../components/DatasetComponents/Outliers/Outliers';
import s from './Dataset.module.scss';
import {
  IExpandDataset,
  ITagsData,
} from '../../../../../types/project/datasets';

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
          <StatisticProperties
            data={expandData.statistics.statisticProperties}
          />
        )}
      </div>
      {expandData && <Outliers data={expandData.statistics.outliers} />}
    </>
  );
}

export default Dataset;
