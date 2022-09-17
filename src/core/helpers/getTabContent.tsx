import React from 'react';
import Description from '../../Pages/Project/Experiments/Description/Description';
import Target from '../../Pages/Project/Experiments/Target/Target';
import Dataset from '../../Pages/Project/Experiments/Dataset/Dataset';
import Metrics from '../../Pages/Project/Experiments/Metrics/Metrics';
import Model from '../../Pages/Project/Experiments/Model/Model';
import Infrastructure from '../../Pages/Project/Experiments/Infrastructure/Infrastructure';
import Commit from '../../Pages/Project/Experiments/Commit/Commit';
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
    case 'dataset':
      return <Dataset data={data} projectData={projectData} />;
    case 'metrics':
      return <Metrics data={data} projectData={projectData} />;
    case 'configuration':
      return <Model data={data} projectData={projectData} />;
    case 'infrastructure':
      return <Infrastructure data={data} projectData={projectData} />;
    case 'last_commit':
      return <Commit data={data} projectData={projectData} />;
    default:
      return null;
  }
};
