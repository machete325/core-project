import React, { useState, useEffect } from 'react';
import Chart from '../../../../../components/Chart/Chart';
import Loader from '../../../../../components/Loader/Loader';
import MachineDetails from '../../../../../components/MachineDetails/MachineDetails';
import {
  genMachineChartData,
  genTrainingTime,
} from '../../../../../core/helpers/infrastructureMethods';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import { IInfrastructure } from '../../../../../types/project/infrastructure';
import { IProject } from '../../../../../types/project/project';

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
          data={genTrainingTime(expandData.trainingTime)}
        />
      )}
    </div>
  );
}

export default Infrastructure;
