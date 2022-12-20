import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoring } from '../../../../../types/project/monitoring';
import s from './Infrastructure.module.scss';

interface Props {
  data: IMonitoring;
}

function Infrastructure({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      {/* {mockData.infrastructure.machines.map((machine) => (
        <div key={machine.id} className={s.data_container}>
          <MachineDetails orientation="horizontal" data={machine} />
          <Chart
            type="infrastructure-line"
            isFill
            data={genMachineChartData(machine)}
          />
        </div>
      ))} */}
      <div className={s.data_container}>
        <div className={s.title}>Machine details</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Machine details"
              src="/images/mock/monitoring/machine-details.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Accumulated costs</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Accumulated costs"
              src="/images/mock/monitoring/accumulated-costs.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Hours used and Costs - Cloud: General CP2</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Hours used and Costs - Cloud: General CP2"
              src="/images/mock/monitoring/hours-used-and-costs.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
    </div>
  );
}

export default Infrastructure;
