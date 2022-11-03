import React from 'react';
import Description from '../../Pages/Projects/ProjectPages/Experiments/Description/Description';
import Target from '../../Pages/Projects/ProjectPages/Experiments/Target/Target';
import Dataset from '../../Pages/Projects/ProjectPages/Experiments/Dataset/Dataset';
import MainMetrics from '../../Pages/Projects/ProjectPages/Experiments/MainMetrics/MainMetrics';
import ModelConfiguration from '../../Pages/Projects/ProjectPages/Experiments/ModelConfiguration/ModelConfiguration';
import Infrastructure from '../../Pages/Projects/ProjectPages/Experiments/Infrastructure/Infrastructure';
import CommitDescription from '../../Pages/Projects/ProjectPages/Experiments/CommitDescription/CommitDescription';
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
      return <MainMetrics data={data} projectData={projectData} />;
    case 'configuration':
      return <ModelConfiguration data={data} projectData={projectData} />;
    case 'infrastructure':
      return <Infrastructure data={data} projectData={projectData} />;
    case 'last_commit':
      return <CommitDescription data={data} projectData={projectData} />;
    default:
      return null;
  }
};
