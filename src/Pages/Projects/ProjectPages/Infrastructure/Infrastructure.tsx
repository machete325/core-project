import React from 'react';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/DropDown/InfrastructureDropDown/DropDown';
import GetMore from '../../../../components/GetMore/GetMore';
import Loader from '../../../../components/Loader/Loader';
import ProjectStatus from '../../../../components/ProjectStatus/ProjectStatus';
import ToBeImpelemented from '../../../../components/ToBeImpelemented/ToBeImpelemented';
import { IInfrastructureItems } from '../../../../types/project/infrastructure';
import s from './Infrastructure.module.scss';

type Props = {
  data: IInfrastructureItems;
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

function Infrastructure({
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
              <td>Type</td>
              <td>Details</td>
              <td>Costs</td>
              <td>Hardware ussage</td>
              <td style={{ textAlign: 'center', width: '35px' }}>Status</td>
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
                  <div
                    role="presentation"
                    onClick={() => handleOpenModal('description', key)}
                  >
                    <ToBeImpelemented
                      element="Name"
                      color="primary"
                      justifyContent="center"
                      blur
                    />
                  </div>
                </td>
                <td>
                  <div
                    role="presentation"
                    onClick={() => handleOpenModal('description', key)}
                  >
                    <ToBeImpelemented
                      element="Type"
                      color="primary"
                      justifyContent="center"
                      blur
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <ToBeImpelemented
                      element="Details"
                      color="primary"
                      justifyContent="center"
                      blur
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <ToBeImpelemented
                      element="Costs"
                      color="primary"
                      justifyContent="center"
                      blur
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <ToBeImpelemented
                      element="Hardware ussage"
                      color="primary"
                      justifyContent="center"
                      blur
                    />
                  </div>
                </td>
                <td>
                  <div className={s.status}>
                    <ToBeImpelemented
                      element={<ProjectStatus status="completed" />}
                      color="primary"
                      justifyContent="center"
                      backgroundBlur
                    />
                  </div>
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

export default Infrastructure;
