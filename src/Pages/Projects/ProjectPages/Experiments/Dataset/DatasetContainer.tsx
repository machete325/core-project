import React, { useState, useEffect } from 'react';
import { IExperiment } from '../../../../../types/project/experiments';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import Loader from '../../../../../components/Loader/Loader';
import s from './Dataset.module.scss';
import Dataset from './Dataset';
import { IProject } from '../../../../../types/project/project';
import { IExpandDataset } from '../../../../../types/project/datasets';

export interface Props {
  data: IExperiment;
  projectData: IProject;
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
