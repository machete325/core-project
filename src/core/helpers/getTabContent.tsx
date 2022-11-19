import React from 'react';
import ExperimentDescription from '../../Pages/Projects/ProjectPages/Experiments/Description/Description';
import ExperimentTarget from '../../Pages/Projects/ProjectPages/Experiments/Target/Target';
import ExperimentDatasetContainer from '../../Pages/Projects/ProjectPages/Experiments/Dataset/DatasetContainer';
import ExperimentMainMetrics from '../../Pages/Projects/ProjectPages/Experiments/MainMetrics/MainMetrics';
import ExperimentModelConfiguration from '../../Pages/Projects/ProjectPages/Experiments/ModelConfiguration/ModelConfiguration';
import ExperimentInfrastructure from '../../Pages/Projects/ProjectPages/Experiments/Infrastructure/Infrastructure';
import ExperimentCommitDescription from '../../Pages/Projects/ProjectPages/Experiments/CommitDescription/CommitDescription';
import DatasetDescription from '../../Pages/Projects/ProjectPages/Datasets/Overview/Overview';
import { IProjectData } from '../../components/Modal/types';

const returnExperimentTabs = (
  type: string,
  data: any,
  projectData: IProjectData,
) => {
  switch (type) {
    case 'description':
      return <ExperimentDescription data={data} />;
    case 'target':
      return <ExperimentTarget data={data} projectData={projectData} />;
    case 'data':
      return (
        <ExperimentDatasetContainer data={data} projectData={projectData} />
      );
    case 'metrics':
      return <ExperimentMainMetrics data={data} projectData={projectData} />;
    case 'configuration':
      return (
        <ExperimentModelConfiguration data={data} projectData={projectData} />
      );
    case 'infrastructure':
      return <ExperimentInfrastructure data={data} projectData={projectData} />;
    case 'last_commit':
      return (
        <ExperimentCommitDescription data={data} projectData={projectData} />
      );
    default:
      return null;
  }
};

const returnDatasetTabs = (
  type: string,
  data: any,
  projectData: IProjectData,
) => {
  switch (type) {
    case 'description':
      return <DatasetDescription data={data} projectData={projectData} />;
    default:
      return null;
  }
};

export const getTabContent = (
  tab: { type: string; path: string; page: string },
  data: any,
  projectData: IProjectData,
) => {
  if (tab.page === 'experiments') {
    return returnExperimentTabs(tab.type, data, projectData);
  }
  if (tab.page === 'datasets') {
    return returnDatasetTabs(tab.type, data, projectData);
  }
  return '';
};
