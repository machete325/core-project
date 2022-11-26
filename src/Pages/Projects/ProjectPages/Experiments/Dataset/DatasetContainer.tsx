import React, { useState, useEffect } from 'react';
import { IProjectData } from '../../../../../components/Modal/types';
import { IExperiment } from '../../../../../core/redux/projects/experiments/types';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import { IExpandDataset } from './types';
import Loader from '../../../../../components/Loader/Loader';
import s from './Dataset.module.scss';
import Dataset from './Dataset';

export interface Props {
  data: IExperiment;
  projectData: IProjectData;
}

function DatasetContainer({ data, projectData }: Props) {
  const [expandData, setExpandData] = useState<
  undefined | { [key: string]: IExpandDataset }
  >();

  const [loading, setLoading] = useState(false);

  const fetchExpandData = async () => {
    try {
      setLoading(true);
      const response = await ExperimentService.getExperimentDatasets(
        projectData.id,
        data.id,
        false,
      );
      setExpandData(response.data.items);
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

  return (
    <div className={s.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        expandData
        && Object.keys(expandData).map((key) => (
          <Dataset key={key} expandData={expandData[key]} />
        ))
      )}
    </div>
  );
}

export default DatasetContainer;
