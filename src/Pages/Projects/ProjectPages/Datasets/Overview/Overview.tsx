import React, { useState, useEffect } from 'react';
import GeneralInfo from '../../../../../components/DatasetComponents/GeneralInfo/GeneralInfo';
import Outliers from '../../../../../components/DatasetComponents/Outliers/Outliers';
import StatisticProperties from '../../../../../components/DatasetComponents/StatisticProperties/StatisticProperties';
import Loader from '../../../../../components/Loader/Loader';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';
import { DatasetService } from '../../../../../core/services/projects/Dataset.service';
import { IExpandDataset, ITagsData } from '../types';
import s from './Overview.module.scss';

interface Props {
  data: IDataset;
}

function Overview({ data }: Props) {
  const [expandData, setExpandData] = useState<undefined | IExpandDataset>();
  const [tagsData, setTagsData] = useState<undefined | ITagsData[]>();
  const [loading, setLoading] = useState(false);

  const fetchExpandData = async () => {
    try {
      setLoading(true);
      const response = await DatasetService.getDataset(data.id, false);
      setExpandData(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpandData();
    return () => {
      setExpandData(undefined);
    };
  }, [data.id]);

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
    <div className={s.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        expandData && (
          <>
            <div className={s.title}>General information</div>
            {tagsData && (
              <GeneralInfo
                displayName={expandData.displayName}
                version={expandData.version}
                tagsData={tagsData}
              />
            )}
            <div className={s.mock_container}>
              <div className={s.title}>Description</div>
              <ToBeImpelemented
                element={(
                  <img
                    alt="descritpion"
                    src="/images/mock/datasets/description.png"
                  />
                )}
                color="primary"
              />
            </div>
            <div className={s.mock_container}>
              <div className={s.title}>Newest samples</div>
              <ToBeImpelemented
                element={(
                  <img
                    alt="descritpion"
                    src="/images/mock/datasets/newest-samples.png"
                  />
                )}
                color="primary"
              />
            </div>
            <div className={s.mock_container}>
              <div className={s.title}>Marked samples</div>
              <ToBeImpelemented
                element={(
                  <img
                    alt="descritpion"
                    src="/images/mock/datasets/marked-samples.png"
                  />
                )}
                color="primary"
              />
            </div>
            {expandData && (
              <StatisticProperties
                data={expandData.statistics.statisticProperties}
              />
            )}
            {expandData && <Outliers data={expandData.statistics.outliers} />}
          </>
        )
      )}
    </div>
  );
}

export default Overview;
