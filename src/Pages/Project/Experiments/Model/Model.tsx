import React from 'react';
import { IProjectData } from '../../../../components/Modal/types';

interface Props {
  data: any;
  projectData: IProjectData;
}

function Model({ data, projectData }: Props) {
  console.log(data, projectData);
  return <div>Model</div>;
}

export default Model;
