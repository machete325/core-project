import React from 'react';
import { IProjectData } from '../../../../../components/Modal/types';

interface Props {
  data: any;
  projectData: IProjectData;
}

function Commit({ data, projectData }: Props) {
  console.log(data, projectData);
  return <div>Commit</div>;
}

export default Commit;
