import React from 'react';
import { IProjectData } from '../../../../../components/Modal/types';
import { IDataset } from '../../../../../core/redux/projects/datasets/types';

interface Props {
  data: IDataset;
  projectData: IProjectData;
}

function Overview({ data, projectData }: Props) {
  console.log(data, projectData);
  return <div>Overview</div>;
}

export default Overview;
