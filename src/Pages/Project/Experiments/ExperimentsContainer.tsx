import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import DropDown from '../../../components/DropDown/DropDown';
import Modal from '../../../components/Modal/Modal';
import { ChoosedTab } from '../../../components/Modal/types';
import { checkExperiments, fetchExperiments } from '../../../core/redux/experiments/actions';
import { experimentsSelector } from '../../../core/redux/experiments/selectors';
import { useAppDispatch } from '../../../core/redux/store';
import Navigation from '../Navigation/Navigation';
import { convertToString } from '../../../core/helpers/convertPath';
import s from './Experiments.module.scss';
import ProjectTitle from '../../../components/ProjectTitle/ProjectTitle';
import ProjectStatus from '../../../components/ProjectStatus/ProjectStatus';
import experimentConfig from './Experiment.config';
import updateRecentlyOpened from '../../../core/helpers/updateRecentlyOpened';

const mockProjectData = [
  { id: 'SalesPredictionKaggle', name: 'Demand Forecasting' },
  { id: '2', name: 'Proj2' },
  { id: '3', name: 'Proj3' },
];

const projectData = {
  id: 'SalesPredictionKaggle',
  name: 'Demand Forecasting',
  page: 'experiment',
  description: '1 out of 3 experiments running',
};

function ProjectExperimentsContainer() {
  const dispatch = useAppDispatch();
  const { data } = useSelector(experimentsSelector);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'experiment',
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchExperiments(mockProjectData[0].id));
  }, []);

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkExperiments(checked));
  };

  const handleOpenModal = (activeTab: string, id: string) => {
    const experiment = data[id];
    updateRecentlyOpened(experiment.id, 'experiment', experiment.name);
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* {
      name: name of experiment section,
      path: path to information on experiment data,
      mainInfoFields: fields for showing main information,
    }
  */

  const rebuildData = (config: any, id: string) => {
    // eslint-disable-next-line no-debugger
    const arr: any = [];

    const markFunction = (formattedData: any, key: any) => {
      let result = null;
      const markObj = (value: any, index: any, displayName?: any) => (
        <div
          key={index}
          role="presentation"
          onClick={() => handleOpenModal(key, id)}
          className={s.obj_container}
        >
          {key !== 'infrastructure' && (
          <div className={s.title_key}>
            {displayName}
            :
          </div>
          )}
          <div>{value}</div>
        </div>
      );

      const markString = (value: any) => (
        <div key={key} role="presentation" onClick={() => handleOpenModal(key, id)}>
          {value}
        </div>
      );

      if (typeof formattedData === 'string') {
        result = markString(formattedData);
      } else {
        result = Object.entries(formattedData).map(([itemKey, itemValue]: any) => {
          if (key === 'infrastructure') {
            return markObj(itemValue.value, itemKey);
          }
          return markObj(itemValue.value, itemKey, itemValue.displayName);
        });
      }
      return <td key={key}>{result}</td>;
    };

    const checkIsExistFormatFunction = (obj: any, objConfig: any) => {
      let tempArr: any = [];
      if (objConfig.formattingFunction) {
        const objData = objConfig.formattingFunction(obj);
        if (Array.isArray(objData)) {
          tempArr = objData;
        } else {
          Object.keys(objData).forEach((key) => {
            tempArr.push(objData[key]);
          });
        }
      } else {
        Object.values(obj).forEach((item) => {
          tempArr.push(item);
        });
      }
      return tempArr;
    };

    if (data && Object.keys(data).length !== 0) {
      const experimentData = data[id];
      Object.entries(config).forEach(([key, value]: any) => {
        const currentField = convertToString(experimentData, value.path);
        const markData = typeof currentField !== 'object' || currentField === null
          ? `${currentField}`
          : checkIsExistFormatFunction(currentField, value);
        arr.push(markFunction(markData, key));
      });
    }
    return arr;
  };

  return (
    <div className={s.wrapper}>
      <Modal
        open={open}
        handleClose={handleClose}
        data={choosedTab}
        projectData={projectData}
        config={experimentConfig}
      />
      <Navigation data={mockProjectData} />
      <div className={s.header}>
        <ProjectTitle data={projectData} />
        <div className={s.buttons}>
          <Button disabled style={{ marginRight: '20px' }}>
            <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
            Compare experiments
          </Button>
          <Button>
            <img alt="Plus" src="/images/icons/Plus.svg" />
            New experiment
          </Button>
        </div>
      </div>
      <div className={s.content}>
        <table>
          <thead>
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
          <tbody>
            {Object.keys(data).length !== 0
              && Object.keys(data).map((key, index) => (
                <tr key={key}>
                  <td>
                    <CheckBox id={key} checked={data[key].checked} />
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
    </div>
  );
}

export default ProjectExperimentsContainer;
