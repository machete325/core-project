import React from 'react';
import Description from '../../Pages/Project/Experiments/Description/Description';
import Target from '../../Pages/Project/Experiments/Target/Target';
import Dataset from '../../Pages/Project/Experiments/Dataset/Dataset';
import Metrics from '../../Pages/Project/Experiments/Metrics/Metrics';
import Model from '../../Pages/Project/Experiments/Model/Model';
import Infrastructure from '../../Pages/Project/Experiments/Infrastructure/Infrastructure';
import Commit from '../../Pages/Project/Experiments/Commit/Commit';

export const getTabContent = (tab: { type: string; path: string }, data: any) => {
  switch (tab.type) {
    case 'description':
      return <Description data={data} />;
    case 'target':
      return <Target data={data} />;
    case 'dataset':
      return <Dataset data={data} />;
    case 'metrics':
      return <Metrics data={data} />;
    case 'configuration':
      return <Model data={data} />;
    case 'infrastructure':
      return <Infrastructure data={data} />;
    case 'last_commit':
      return <Commit data={data} />;
    default:
      return null;
  }
};
