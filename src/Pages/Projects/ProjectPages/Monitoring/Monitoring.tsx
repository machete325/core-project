import React from 'react';
import { useSelector } from 'react-redux';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/DropDown/DatasetsDropDown/DropDown';
import Error from '../../../../components/Error/Error';
import GetMore from '../../../../components/GetMore/GetMore';
import Loader from '../../../../components/Loader/Loader';
import { getErrors } from '../../../../core/redux/projects/monitoring/selectors';
import ToBeImpelemented from '../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IMonitoringItems } from '../../../../types/project/Monitoring';
import s from './Monitoring.module.scss';
import MetricsInfo from '../../../../components/ExperimentComponents/MetricsInfo/MetricsInfo';
import { getFormattedDateFromTimeStamp } from '../../../../core/helpers/dateMethods';

type Props = {
  data: IMonitoringItems;
  handleCheckAll: any;
  handleCheck: any;
  fetching: boolean;
  isExistScroll: boolean;
  handleOpenModal: (tab: string, id: string) => void;
  getMoreHandler: () => void;
  amountDatasets: number;
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
  projectData,
  handleOpenModal,
}: Props) {
  const hasErrors = useSelector(getErrors);

  return (
    <div className={s.content}>
      {hasErrors && <Error />}
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
              <td>Data drift</td>
              <td>Concept drift</td>
              <td>Infrastructure</td>
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
                <td className={s.table_text}>Name</td>
                <td>
                  <div
                    role="presentation"
                    onClick={() => handleOpenModal('description', key)}
                  >
                    <ToBeImpelemented
                      element="Model (production)"
                      color="primary"
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
                  <ToBeImpelemented element="Data drift" color="primary" />
                </td>
                <td>
                  <ToBeImpelemented element="Concept drift" color="primary" />
                </td>
                <td>
                  <ToBeImpelemented element="Infrastructure" color="primary" />
                </td>
                <td>
                  <ToBeImpelemented element="Costs" color="primary" />
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
      {!isExistScroll && amountDatasets < 10 && !fetching && projectData && (
        <GetMore disabled={fetching} getMoreHandler={getMoreHandler} />
      )}
    </div>
  );
}

export default Monitoring;
