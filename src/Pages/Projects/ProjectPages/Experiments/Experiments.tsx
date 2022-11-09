import React from 'react';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/DropDown/ExperimentsDropDown/DropDown';
import ProjectStatus from '../../../../components/ProjectStatus/ProjectStatus';
import { IExperimentData } from '../../../../core/redux/projects/experiments/types';
import s from './Experiments.module.scss';
import Loader from '../../../../components/Loader/Loader';
import { formDatasetText } from '../../../../core/helpers/textMethods';
import MetricsInfo from '../../../../components/ExperimentComponents/MetricsInfo/MetricsInfo';
import ModelConfigurationInfo from '../../../../components/ExperimentComponents/ModelConfigurationInfo/ModelConfigurationInfo';
import InfrastructureInfo from '../../../../components/ExperimentComponents/InfrastructureInfo/InfrastructureInfo';

type Props = {
  data: IExperimentData;
  handleCheckAll: any;
  handleCheck: any;
  handleOpenModal: any;
  fetching: boolean;
};

function ProjectExperiments({
  handleCheckAll,
  handleCheck,
  data,
  handleOpenModal,
  fetching,
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
              <tr className={s.table_row} key={key}>
                <td>
                  <CheckBox
                    id={key}
                    checked={data[key].checked}
                    onChange={() => handleCheck(key)}
                  />
                </td>
                <td className={s.table_text}>{index + 1}</td>
                <td>
                  <div
                    role="presentation"
                    className={s.table_text}
                    onClick={() => handleOpenModal('description', key)}
                  >
                    {data[key].description}
                  </div>
                </td>
                <td>
                  <div
                    role="presentation"
                    className={s.table_text}
                    onClick={() => handleOpenModal('target', key)}
                  >
                    {data[key].target}
                  </div>
                </td>
                <td>
                  <div
                    role="presentation"
                    className={s.table_text}
                    onClick={() => handleOpenModal('data', key)}
                  >
                    {formDatasetText(data[key].data)}
                  </div>
                </td>
                <td>
                  <MetricsInfo
                    modalHandler={handleOpenModal}
                    modalKey={key}
                    data={data[key].metrics.items}
                    limiter={2}
                  />
                </td>

                <td>
                  <div className={s.obj_container}>
                    <ModelConfigurationInfo
                      modalHandler={handleOpenModal}
                      modalKey={key}
                      data={data[key].configuration.items}
                      marginBottom="4px"
                    />
                  </div>
                </td>
                <td>
                  <div className={s.obj_container}>
                    <InfrastructureInfo
                      modalHandler={handleOpenModal}
                      modalKey={key}
                      data={data[key].infrastructure}
                      marginBottom="4px"
                    />
                  </div>
                </td>
                <td>
                  <div
                    role="presentation"
                    className={s.table_text}
                    onClick={() => handleOpenModal('last_commit', key)}
                  >
                    {data[key].code.commitMessage}
                  </div>
                </td>
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
      {fetching && <Loader variant="down" />}
    </div>
  );
}

export default ProjectExperiments;
