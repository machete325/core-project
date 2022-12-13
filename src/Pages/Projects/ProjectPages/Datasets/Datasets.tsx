import React from 'react';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import DropDown from '../../../../components/DropDown/DatasetsDropDown/DropDown';
import GetMore from '../../../../components/GetMore/GetMore';
import Loader from '../../../../components/Loader/Loader';
import s from './Datasets.module.scss';
import { IDatasets } from '../../../../types/project/datasets';
import ProjectVersion from '../../../../components/ProjectVersion/ProjectVersion';
import ToBeImpelemented from '../../../../components/ToBeImpelemented/ToBeImpelemented';

type Props = {
  data: IDatasets;
  handleCheckAll: any;
  handleCheck: any;
  fetching: boolean;
  isExistScroll: boolean;
  handleOpenModal: (tab: string, id: string) => void;
  getMoreHandler: () => void;
  amountDatasets: number;
  projectData: any;
};

function Datasets({
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
              <td>Title</td>
              <td>Version</td>
              <td>Description</td>
              <td>Stats</td>
              <td>Newest sample</td>
              <td>Latest marked sample</td>
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
                  <ProjectVersion version={data[key].tag} />
                </td>
                <td>
                  <div
                    role="presentation"
                    onClick={() => handleOpenModal('description', key)}
                  >
                    <ToBeImpelemented element="Description" color="primary" />
                  </div>
                </td>
                <td>
                  <ToBeImpelemented element="Stats" color="primary" />
                </td>
                <td>
                  <ToBeImpelemented element="Newest sample" color="primary" />
                </td>
                <td>
                  <ToBeImpelemented
                    element="Latest marked sample"
                    color="primary"
                  />
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
      {!isExistScroll && amountDatasets < 10 && !fetching && projectData && (
        <GetMore disabled={fetching} getMoreHandler={getMoreHandler} />
      )}
    </div>
  );
}

export default Datasets;
