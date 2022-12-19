import React from 'react';
import Chart from '../../../../../components/Chart/Chart';
import MachineDetails from '../../../../../components/MachineDetails/MachineDetails';
import { genMachineChartData } from '../../../../../core/helpers/infrastructureMethods';
import { IMonitoring } from '../../../../../types/project/monitoring';
import mockData from '../mockData.json';
import s from './Infrastructure.module.scss';

interface Props {
  data: IMonitoring;
}

function Infrastructure({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      {mockData.infrastructure.machines.map((machine) => (
        <div key={machine.id} className={s.data_container}>
          <MachineDetails orientation="horizontal" data={machine} />
          <Chart
            type="infrastructure-line"
            isFill
            data={genMachineChartData(machine)}
          />
        </div>
      ))}
    </div>
  );
}

export default Infrastructure;
