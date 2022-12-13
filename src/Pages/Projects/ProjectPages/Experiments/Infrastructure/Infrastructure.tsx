import React, { useState, useEffect } from 'react';
import Chart from '../../../../../components/Chart/Chart';
import Loader from '../../../../../components/Loader/Loader';
import MachineDetails from '../../../../../components/MachineDetails/MachineDetails';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import {
  IProject,
  IInfrastructure,
  IMachine,
} from '../../../../../types/project/Project';

interface Props {
  data: any;
  projectData: IProject;
}

function Infrastructure({ data, projectData }: Props) {
  const [expandData, setExpandData] = useState<null | IInfrastructure>(null);
  const [loading, setLoading] = useState(false);

  const fetchExpandData = async () => {
    try {
      setLoading(true);
      const response = await ExperimentService.getExperimentInfrastructure(
        projectData.id,
        data.id,
        false,
      );
      setExpandData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpandData();
  }, []);

  const genMachineChartData = (machine: IMachine) => ({
    id: machine.id,
    displayName: `Hours used and Costs - Cloud: ${machine.displayName}`,
    value: { usage: machine.usage, costs: machine.costs },
  });

  const genChartData = (trainingTime: any) => ({
    displayName: 'Training time',
    value: { trainingTime },
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        expandData
        && expandData.machines?.map((machine) => (
          <div key={machine.id}>
            <MachineDetails orientation="horizontal" data={machine} />
            <div style={{ marginBottom: '32px' }}>
              <Chart
                type="infrastructure-line"
                isFill
                data={genMachineChartData(machine)}
              />
            </div>
          </div>
        ))
      )}
      {expandData && (
        <Chart
          type="infrastructure-line"
          isFill
          data={genChartData(expandData.trainingTime)}
        />
      )}
    </div>
  );
}

export default Infrastructure;
