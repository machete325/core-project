import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import DropDown from '../../../components/DropDown/DropDown';
import Modal, { ChoosedTab } from '../../../components/Modal/Modal';
import { checkExperiments, fetchExperiments } from '../../../core/redux/experiments/actions';
import { experimentsSelector } from '../../../core/redux/experiments/selectors';
import { useAppDispatch } from '../../../core/redux/store';
import Navigation from '../Navigation/Navigation';
import { convertToString } from '../../../core/helpers/convertPath';
import s from './Experiments.module.scss';
import ProjectTitle from '../../../components/ProjectTitle/ProjectTitle';
import ProjectStatus from '../../../components/ProjectStatus/ProjectStatus';

const mockProjectData = [
  { id: '1', name: 'Demand Forecasting' },
  { id: '2', name: 'Proj2' },
  { id: '3', name: 'Proj3' },
];

const projectData = {
  id: '1',
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
    dispatch(fetchExperiments());
  }, []);

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkExperiments(checked));
  };

  const handleOpenModal = (activeTab: string, version: string | undefined) => {
    const experiment = data.find((item) => item.version === version);
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const genTableDataMark = (
    model: Object | string | number,
    activeTab: string,
    version: string | undefined,
    isTitle: boolean = true,
  ) => {
    const marking = (key: any, value: any) => (
      <div
        key={key}
        role="presentation"
        onClick={() => handleOpenModal(activeTab, version)}
        className={typeof model === 'object' ? s.obj_container : ''}
      >
        {isTitle && (
        <span className={s.title_key}>
          {key}
          :
        </span>
        )}
        {value}
      </div>
    );
    const result = typeof model === 'object'
      ? Object.entries(model).map(([key, value]) => marking(key, value))
      : marking(1, model);
    return <td key={activeTab}>{result}</td>;
  };

  const experimentConfig = {
    description: { name: 'Description', path: '.description' },
    target: { name: 'Target', path: '.target' },
    dataset: { name: 'Data', path: '.dataset' },
    metrics: { name: 'Main Metrics', path: '.metrics' },
    configuration: { name: 'Model configuration', path: '.configuration' },
    infrastructure: { name: 'Infrastructure', path: '.infrastructure' },
    last_commit: { name: 'Commit Description', path: '.commit.last_commit.description' },
  };

  const genTableData = (
    config: { [key: string]: { name: string; path: string } },
    version: string,
  ) => {
    const arr: any[] = [];
    const experimentData = data.find((experiment) => experiment.version === version);
    Object.entries(config).forEach((item) => {
      const [key, value] = item;
      const tableData = convertToString(experimentData, value.path);
      const isTitle = typeof tableData === 'object';
      arr.push(
        genTableDataMark(
          tableData,
          key,
          experimentData?.version,
          key === 'dataset' ? false : isTitle,
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
            {data.length !== 0
              && data.map((experiment, index) => (
                <tr key={experiment.version}>
                  <td>
                    <CheckBox id={index} checked={experiment.checked} />
                  </td>
                  <td>{index + 1}</td>
                  {genTableData(experimentConfig, experiment.version)}
                  <td>
                    <ProjectStatus status={experiment.status} />
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
