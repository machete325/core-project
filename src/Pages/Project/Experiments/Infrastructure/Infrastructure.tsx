import React from 'react';
import { IProjectData } from '../../../../components/Modal/types';

interface Props {
  data: any;
  projectData: IProjectData;
}

function Infrastructure({ data, projectData }: Props) {
  console.log(data, projectData);
  return <div>Infrastructure</div>;
}

export default Infrastructure;
