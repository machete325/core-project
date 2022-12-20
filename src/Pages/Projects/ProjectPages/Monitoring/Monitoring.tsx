import React from 'react';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/DropDown/MonitoringDropDown/DropDown';
import GetMore from '../../../../components/GetMore/GetMore';
import Loader from '../../../../components/Loader/Loader';
import ToBeImpelemented from '../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoringItems } from '../../../../types/project/monitoring';
import s from './Monitoring.module.scss';
import MetricsInfo from '../../../../components/ExperimentComponents/MetricsInfo/MetricsInfo';
import { getFormattedDateFromTimeStamp } from '../../../../core/helpers/dateMethods';
import MonitoringStatus from '../../../../components/MonitoringComponents/MonitoringStatus/MonitoringStatus';
import MonitoringInfrastructure from '../../../../components/MonitoringComponents/MonitoringInfrastructure/MonitoringInfrastructure';

type Props = {
  data: IMonitoringItems;
  handleCheckAll: any;
  handleCheck: any;
  fetching: boolean;
  isExistScroll: boolean;
  handleOpenModal: (tab: string, id: string) => void;
  getMoreHandler: () => void;
  amountDatasets: number;
  totalCount: number | undefined;
  projectData: any;
};

function Monitoring({
  handleCheckAll,
  handleCheck,
  data,
  fetching,
  isExistScroll,
  getMoreHandler,
  amountDatasets,
  totalCount,
  projectData,
  handleOpenModal,
}: Props) {
  return (
    <div className={s.content}>
      {amountDatasets !== 0 && (
        <table className={s.table}>
          <thead className={s.thead}>
            <tr>
              <td>
                <CheckBox onChange={handleCheckAll} id="1" checked={false} />
              </td>
              <td>#</td>
              <td>Name</td>
              <td>Model (production)</td>
              <td>Metrics</td>
              <td style={{ textAlign: 'center' }}>Data drift</td>
              <td style={{ textAlign: 'center' }}>Concept drift</td>
              <td style={{ textAlign: 'center' }}>Infrastructure</td>
              <td>Costs</td>
              <td>Last updated</td>
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
                <td className={s.table_text}>
                  <ToBeImpelemented
                    element="Name"
                    color="primary"
                    justifyContent="center"
                  />
                </td>
                <td>
                  <div
                    role="presentation"
                    onClick={() => handleOpenModal('description', key)}
                  >
                    <ToBeImpelemented
                      element="Model (production)"
                      color="primary"
                      justifyContent="center"
                    />
                  </div>
                </td>
                <td>
                  <MetricsInfo
                    limiter={2}
                    data={data[key].experiment.metrics.items}
                  />
                </td>
                <td>
                  <MonitoringStatus status={data[key].dataDriftStatus} />
                </td>
                <td>
                  <MonitoringStatus status={data[key].conceptDriftStatus} />
                </td>
                <td>
                  <MonitoringStatus status={data[key].infrastructureStatus} />
                </td>
                <td>
                  <MonitoringInfrastructure
                    data={data[key]}
                    marginBottom="8px"
                  />
                </td>
                <td className={s.table_text} style={{ whiteSpace: 'nowrap' }}>
                  {getFormattedDateFromTimeStamp(data[key].edited)}
                </td>
                <td style={{ width: '32px' }}>
                  <DropDown />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {fetching && <Loader variant="down" />}
      {totalCount !== amountDatasets
        && !isExistScroll
        && amountDatasets < 10
        && !fetching
        && projectData && (
          <GetMore disabled={fetching} getMoreHandler={getMoreHandler} />
      )}
    </div>
  );
}

export default Monitoring;
