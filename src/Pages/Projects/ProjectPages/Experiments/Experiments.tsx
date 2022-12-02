import React from 'react';
import { useSelector } from 'react-redux';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/DropDown/ExperimentsDropDown/DropDown';
import ProjectStatus from '../../../../components/ProjectStatus/ProjectStatus';
import { IExperimentData } from '../../../../types/project/Experiments';
import s from './Experiments.module.scss';
import Loader from '../../../../components/Loader/Loader';
import { formDatasetText } from '../../../../core/helpers/textMethods';
import MetricsInfo from '../../../../components/ExperimentComponents/MetricsInfo/MetricsInfo';
import ModelConfigurationInfo from '../../../../components/ExperimentComponents/ModelConfigurationInfo/ModelConfigurationInfo';
import InfrastructureInfo from '../../../../components/ExperimentComponents/InfrastructureInfo/InfrastructureInfo';
import Error from '../../../../components/Error/Error';
import { getErrors } from '../../../../core/redux/projects/experiments/selectors';
import { checkCodeMessage } from '../../../../core/helpers/objectMethods';
import GetMore from '../../../../components/GetMore/GetMore';

type Props = {
  data: IExperimentData;
  handleCheckAll: any;
  handleCheck: any;
  handleOpenModal: any;
  fetching: boolean;
  isExistScroll: boolean;
  getMoreHandler: () => void;
  amountExperiments: number;
  projectData: any;
};

function ProjectExperiments({
  handleCheckAll,
  handleCheck,
  data,
  handleOpenModal,
  fetching,
  isExistScroll,
  getMoreHandler,
  amountExperiments,
  projectData,
}: Props) {
  const hasErrors = useSelector(getErrors);

  return (
    <div className={s.content}>
      {hasErrors && <Error />}
      {amountExperiments !== 0 && (
        <table className={s.table}>
          <thead className={s.thead}>
            <tr>
              <td>
                <CheckBox onChange={handleCheckAll} id="1" checked={false} />
              </td>
              <td>#</td>
              <td>Name</td>
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
            {Object.keys(data).map((key, index) => (
              <tr className={s.table_row} key={key}>
                <td>
                  <CheckBox
                    id={key}
                    checked={data[key].checked}
                    onChange={() => handleCheck(key)}
                  />
                </td>
                <td className={s.table_count}>{index + 1}</td>
                <td className={s.table_text}>{data[key].name}</td>
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
                    {checkCodeMessage(data[key])}
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
      )}
      {fetching && <Loader variant="down" />}
      {!isExistScroll && amountExperiments < 10 && !fetching && projectData && (
        <GetMore disabled={fetching} getMoreHandler={getMoreHandler} />
      )}
    </div>
  );
}

export default ProjectExperiments;
