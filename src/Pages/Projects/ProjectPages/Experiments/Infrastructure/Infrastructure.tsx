import React from 'react';
import MachineDetails from '../../../../../components/MachineDetails/MachineDetails';
import { IProjectData } from '../../../../../components/Modal/types';

interface Props {
  data: any;
  projectData: IProjectData;
}

function Infrastructure({ data, projectData }: Props) {
  console.log(data, projectData);
  return (
    <div>
      1
      <MachineDetails />
    </div>
  );
}

export default Infrastructure;
