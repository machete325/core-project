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
import StatusTag from '../../../components/StatusTag/StatusTag';

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
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const genTableDataMark = (
    model: Object | string | number,
    activeTab: string,
    id: string,
    isTitle: boolean,
  ) => {
    const marking = (key: any, value: any) => {
      switch (activeTab) {
        case 'infrastructure':
          return (
            <div
              key={key}
              role="presentation"
              onClick={() => handleOpenModal(activeTab, id)}
              className={s.obj_container}
            >
              {value.value}
            </div>
          );
        default:
          return (
            <div
              key={key}
              role="presentation"
              onClick={() => handleOpenModal(activeTab, id)}
              className={typeof model === 'object' ? s.obj_container : ''}
            >
              {isTitle && (
              <span className={s.title_key}>
                {key}
                :
              </span>
              )}
              {value || 'null'}
            </div>
          );
      }
    };
    const result = typeof model === 'object' && model !== null
      ? Object.entries(model).map(([key, value]) => marking(key, value))
      : marking(1, model);
    return <td key={activeTab}>{result}</td>;
  };

  /* {
      name: name of experiment section,
      path: path to information on experiment data,
      mainInfoFields: fields for showing main information,
      length: amount of fields for showing
    }
  */

  const experimentConfig = {
    description: {
      name: 'Description',
      path: '.description',
      mainInfoFields: [],
      length: undefined,
      formattingFunction: undefined,
      isTitle: false,
    },
    target: {
      name: 'Target',
      path: '.target',
      mainInfoFields: [],
      length: undefined,
      formattingFunction: undefined,
      isTitle: false,
    },
    dataset: {
      name: 'Data',
      path: '.dataset.name',
      mainInfoFields: [],
      length: undefined,
      formattingFunction: undefined,
      isTitle: false,
    },
    metrics: {
      name: 'Main Metrics',
      path: '.metrics.items',
      mainInfoFields: ['displayName', 'value'],
      length: 3,
      formattingFunction: undefined,
      isTitle: true,
    },
    configuration: {
      name: 'Model configuration',
      path: '.configuration.items.runner.models.lightgbm.parameters.hyper_parameters',
      mainInfoFields: ['display_name', 'value'],
      length: 3,
      formattingFunction: undefined,
      isTitle: true,
    },
    infrastructure: {
      name: 'Infrastructure',
      path: '.infrastructure',
      mainInfoFields: [],
      length: undefined,
      formattingFunction: (infrastructure: any) => {
        const tempObj = {
          trained: { value: <>1</>, isTitle: true },
          avg: { value: <>1</>, isTitle: true },
          used: { value: <>1</>, isTitle: false },
        };
        tempObj.trained.value = (
          <>
            <span className={s.title_key}>Trained in:</span>
            {` ${infrastructure.trainingTime}`}
          </>
        );
        tempObj.avg.value = (
          <>
            <span className={s.title_key}>Avg. cost:</span>
            <StatusTag
              usedValue={infrastructure.usedBudget}
              totalValue={infrastructure.totalBudget}
            />
          </>
        );
        tempObj.used.value = (
          <span className={s.title_key}>
            {`Used ${infrastructure.usedMachines}/${infrastructure.totalMachines} VMs`}
          </span>
        );
        return tempObj;
      },

      isTitle: false,
    },
    last_commit: {
      name: 'Commit Description',
      path: '.code.commitMessage',
      mainInfoFields: [],
      length: undefined,
      formattingFunction: undefined,
      isTitle: false,
    },
  };

  const genTableData = (
    config: {
      [key: string]: {
        name: string;
        path: string;
        mainInfoFields: any[];
        length: number | undefined;
        formattingFunction: ((field: any) => void) | undefined;
        isTitle: boolean;
      };
    },
    id: string,
  ) => {
    const arr: any[] = [];
    const experimentData = data[id];

    const formatObject = (obj: any, mainInfoFields: string[], length: number | undefined) => {
      const keys = typeof obj === 'object' ? obj !== null && Object.keys(obj) : false;
      const isObj = keys && typeof obj[keys[0]] === 'object';
      if (isObj) {
        const tempData: { [key: string]: any } = {};
        Object.keys(obj).forEach((item, index) => {
          if (typeof length !== 'undefined' && index > length - 1) {
            return null;
          }
          tempData[obj[item][mainInfoFields[0]]] = obj[item][mainInfoFields[1]];
          return tempData;
        });
        return tempData;
      }
      return obj;
    };

    Object.entries(config).forEach((item) => {
      const [key, value] = item;
      const tableData = formatObject(
        convertToString(experimentData, value.path),
        value.mainInfoFields,
        value.length,
      );
      arr.push(
        genTableDataMark(
          value.formattingFunction ? value.formattingFunction(tableData) : tableData,
          key,
          id,
          value.isTitle,
        ),
      );
    });
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
                  {genTableData(experimentConfig, key)}
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
