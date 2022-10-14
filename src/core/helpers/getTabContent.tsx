import React from 'react';
import Description from '../../Pages/Projects/ProjectPages/Experiments/Description/Description';
import Target from '../../Pages/Projects/ProjectPages/Experiments/Target/Target';
import Dataset from '../../Pages/Projects/ProjectPages/Experiments/Dataset/Dataset';
import Metrics from '../../Pages/Projects/ProjectPages/Experiments/Metrics/Metrics';
import Configuration from '../../Pages/Projects/ProjectPages/Experiments/Configuration/Configuration';
import Infrastructure from '../../Pages/Projects/ProjectPages/Experiments/Infrastructure/Infrastructure';
import Commit from '../../Pages/Projects/ProjectPages/Experiments/Commit/Commit';
import { IProjectData } from '../../components/Modal/types';

export const getTabContent = (
  tab: { type: string; path: string },
  data: any,
  projectData: IProjectData,
) => {
  switch (tab.type) {
    case 'description':
      return <Description data={data} projectData={projectData} />;
    case 'target':
      return <Target data={data} projectData={projectData} />;
    case 'data':
      return <Dataset data={data} projectData={projectData} />;
    case 'metrics':
      return <Metrics data={data} projectData={projectData} />;
    case 'configuration':
      return <Configuration data={data} projectData={projectData} />;
    case 'infrastructure':
      return <Infrastructure data={data} projectData={projectData} />;
    case 'last_commit':
      return <Commit data={data} projectData={projectData} />;
    default:
      return null;
  }
};
