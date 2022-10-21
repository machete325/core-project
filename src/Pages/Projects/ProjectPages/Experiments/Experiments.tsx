import React from 'react';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/ExperimentsDropDown/DropDown';
import ProjectStatus from '../../../../components/ProjectStatus/ProjectStatus';
import experimentConfig from './Experiment.config';
import { IExperimentData } from '../../../../core/redux/projects/experiments/types';
import s from './Experiments.module.scss';

type Props = {
  data: IExperimentData;
  rebuildData: any;
  handleCheckAll: any;
  handleCheck: any;
};

function ProjectExperiments({
  handleCheckAll,
  handleCheck,
  data,
  rebuildData,
}: Props) {
  return (
    <div className={s.content}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <td>
              <CheckBox onChange={handleCheckAll} id="1" checked={false} />
            </td>
            <td>#</td>
            <td>Description</td>
            <td>Target</td>
            <td>Data</td>
            <td>Main Metrics</td>
            <td>Model configuration</td>
            <td>Infrastructure</td>
            <td>Commit Description</td>
            <td style={{ textAlign: 'center' }}>Status</td>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {Object.keys(data).length !== 0
            && Object.keys(data).map((key, index) => (
              <tr key={key}>
                <td>
                  <CheckBox
                    id={key}
                    checked={data[key].checked}
                    onChange={() => handleCheck(key)}
                  />
                </td>
                <td>{index + 1}</td>
                {rebuildData(experimentConfig, key)}
                <td>
                  <ProjectStatus status={data[key].status} />
                </td>
                <td>
                  <DropDown />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectExperiments;
