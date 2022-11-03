import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import s from './Overview.module.scss';
import { oneProjectData } from '../../../../core/redux/projects/selectors';
import DropDown from '../../../../components/DropDown/OverviewDropdown/DropDown';
import Button from '../../../../components/Button/Button';
import { fetchOverview } from '../../../../core/redux/projects/overview/actions';
import { useAppDispatch } from '../../../../core/redux/store';
import {
  getErrors,
  getLoading,
  getOverviewData,
} from '../../../../core/redux/projects/overview/selectors';
import OverviewStatusTag from '../../../../components/OverviewStatusTag/OverviewStatusTag';
import ProjectStatus from '../../../../components/ProjectStatus/ProjectStatus';
import MetricsInfo from '../../../../components/ExperimentComponents/MetricsInfo/MetricsInfo';
import ModelConfigurationInfo from '../../../../components/ExperimentComponents/ModelConfigurationInfo/ModelConfigurationInfo';
import InfrastructureInfo from '../../../../components/ExperimentComponents/InfrastructureInfo/InfrastructureInfo';
import experimentConfig from '../Experiments/Experiment.config';
import { formDatasetText } from '../../../../core/helpers/textMethods';
import Chart from '../../../../components/Chart/Chart';
import Alert from '../../../../components/Alert/Alert';
import Loader from '../../../../components/Loader/Loader';
import Modal from '../../../../components/Modal/Modal';
import { ChoosedTab } from '../../../../components/Modal/types';

const mockPieData = {
  experimentStatusDistribution: {
    stopped: 0.35,
    failed: 0.1,
    completed: 0.55,
  },
};

function ProjectOverviewContainer() {
  const dispatch = useAppDispatch();
  const projectData = useSelector(oneProjectData);
  const [open, setOpen] = useState(false);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'experiment',
  });

  const data = useSelector(getOverviewData);
  const loading = useSelector(getLoading);
  const hasErrors = useSelector(getErrors);

  const handleOpenModal = (activeTab: string) => {
    const experiment = data.latestExperiment;
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (projectData) {
      dispatch(fetchOverview(projectData.id));
    }
  }, [projectData]);

  const tagConfig: any = {
    totalNumberOfExperiments: {
      displayName: 'experiments',
      color: '#0D5DEC',
      label: 'label',
      inPercents: false,
    },
    totalNumberOfDatasets: {
      displayName: 'data sets',
      color: '#57DAD7',
      label: 'label',
      inPercents: false,
    },
    totalNumberOfMonitoringModels: {
      displayName: 'monitoring models',
      color: '#5237FB',
      label: 'label',
      inPercents: false,
    },
    errorReporting: {
      displayName: 'error reporting',
      color: '#F51D44',
      label: 'label',
      inPercents: true,
    },
    userFit: {
      displayName: 'User fit',
      color: '#1DF580',
      label: 'label',
      inPercents: true,
    },
  };

  return (
    <div className={s.wrapper}>
      {projectData ? (
        <>
          <Modal
            open={open}
            handleClose={handleClose}
            data={choosedTab}
            projectData={projectData}
            config={experimentConfig}
          />
          <Navigation data={projectData} />
          <div className={s.header}>
            <ProjectTitle data={projectData} page="overview" />
            <div className={s.header_buttons}>
              <Button style={{ marginRight: '16px' }}>
                <img alt="Plus" src="/images/icons/Plus.svg" />
                New experiment
              </Button>
              <DropDown />
            </div>
          </div>
        </>
      ) : null}
      {loading ? (
        <Loader />
      ) : (
        <div className={s.content}>
          {hasErrors ? (
            <div>The request has errors</div>
          ) : (
            <>
              <div className={s.tags_container}>
                {Object.keys(tagConfig).map((key: any) => (
                  <OverviewStatusTag
                    key={key}
                    data={data[key]}
                    config={tagConfig[key]}
                  />
                ))}
              </div>
              <div className={s.charts_container}>
                <div className={s.experiment_activity}>
                  <div className={s.chart_title}>Experiments activity</div>
                  <Chart data={data.experimentActivityFrequency} type="bar" />
                </div>
                <div className={s.experiment_status}>
                  <div className={s.chart_title}>Experiments status</div>
                  <Chart
                    data={mockPieData.experimentStatusDistribution}
                    type="pie"
                  />
                </div>
              </div>
              <div className={s.info_container}>
                <div className={s.info}>
                  <div className={s.info_title}>Latest experiment</div>
                  <div className={s.info_content}>
                    <div className={s.experiment_title}>
                      <div
                        role="presentation"
                        className={s.modal_call}
                        onClick={() => handleOpenModal('description')}
                      >
                        {data.latestExperiment.description}
                      </div>
                      <ProjectStatus status={data.latestExperiment.status} />
                    </div>
                    <div className={s.experiment_content}>
                      <div
                        role="presentation"
                        className={s.modal_call}
                        onClick={() => handleOpenModal('target')}
                      >
                        {data.latestExperiment.target}
                      </div>
                      <div
                        role="presentation"
                        className={s.modal_call}
                        onClick={() => handleOpenModal('data')}
                      >
                        {formDatasetText(data.latestExperiment.data)}
                      </div>
                      <div>
                        <MetricsInfo
                          modalHandler={handleOpenModal}
                          data={data.latestExperiment.metrics.items}
                          limiter={2}
                        />
                      </div>
                      <ModelConfigurationInfo
                        modalHandler={handleOpenModal}
                        data={data.latestExperiment.configuration.items}
                      />
                      <InfrastructureInfo
                        modalHandler={handleOpenModal}
                        data={data.latestExperiment.infrastructure}
                      />
                    </div>
                  </div>
                </div>
                <div className={s.info}>
                  <div className={s.info_title}>Latest VM</div>
                  <div className={s.vm_content}>
                    <div className={s.vm_image}>
                      <img src="/images/machine.png" alt="machine" />
                    </div>
                    <div>
                      <ProjectStatus status="running" />
                      <div className={s.vm_text}>
                        <div>Name:</div>
                        <div>Type:</div>
                        <div>Cloud provider:</div>
                        <div>Spec:</div>
                        <div>Ongoing cost:</div>
                        <div>Accumulated costs:</div>
                        <div>Experiments running:</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.info}>
                  <div className={s.info_title}>Alerts</div>
                  <div className={s.info_content}>
                    <Alert type="urgent" />
                    <Alert type="mild" />
                    <Alert type="standart" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectOverviewContainer;
