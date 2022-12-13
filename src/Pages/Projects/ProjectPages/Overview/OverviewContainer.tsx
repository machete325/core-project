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
import Error from '../../../../components/Error/Error';
import { IProjectOverview } from '../../../../types/project/Project';
import MachineDetails from '../../../../components/MachineDetails/MachineDetails';
import getOverviewLabel from '../../../../components/OverviewStatusTag/getOverviewLabel';

function ProjectOverviewContainer() {
  const dispatch = useAppDispatch();
  const projectData = useSelector(oneProjectData);
  const [open, setOpen] = useState(false);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'overview',
  });

  const controller = new AbortController();
  const { signal } = controller;

  const data = useSelector(getOverviewData);
  const loading = useSelector(getLoading);
  const hasErrors = useSelector(getErrors);

  const handleOpenModal = (activeTab: string) => {
    const experiment = data?.latestExperiment;
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (projectData && !data && !loading) {
      dispatch(fetchOverview(projectData.id, signal));
    }
    return () => {
      controller.abort();
    };
  }, [projectData]);

  const tagConfig: any = {
    totalNumberOfExperiments: {
      displayName: 'experiments',
      color: '#0D5DEC',
      label: 'experimentStatusFrequency',
      labelType: 'experiments',
      inPercents: false,
    },
    totalNumberOfDatasets: {
      displayName: 'data sets',
      color: '#57DAD7',
      label: 'totalNumberOfDatasetVersions',
      labelType: 'datasets',
      inPercents: false,
    },
    totalNumberOfMonitoringModels: {
      displayName: 'monitoring models',
      color: '#5237FB',
      label: 'totalNumberOfMonitoringDrifts',
      labelType: 'monitoring',
      inPercents: false,
    },
    errorReporting: {
      displayName: 'error reporting',
      color: '#F51D44',
      label: 'errorReportingTrend',
      labelType: 'trend',
      inPercents: true,
    },
    userFit: {
      displayName: 'User fit',
      color: '#1DF580',
      label: 'userFitTrend',
      labelType: 'trend',
      inPercents: true,
    },
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
      <Navigation data={projectData} />
      <div className={s.header}>
        <ProjectTitle type="project" data={projectData} page="overview" />
        <div className={s.header_buttons}>
          <Button style={{ marginRight: '16px' }}>
            <img alt="Plus" src="/images/icons/Plus.svg" />
            New experiment
          </Button>
          <DropDown />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className={s.content}>
          {hasErrors && <Error />}
          {data && (
            <>
              <div className={s.tags_container}>
                {Object.keys(tagConfig).map((key) => (
                  <OverviewStatusTag
                    key={key}
                    data={data[key as keyof IProjectOverview]}
                    config={tagConfig[key]}
                    label={getOverviewLabel(data, tagConfig[key])}
                  />
                ))}
              </div>
              <div className={s.charts_container}>
                <div className={s.experiment_activity}>
                  <div className={s.chart_title}>Experiments activity</div>
                  <Chart data={data.experimentActivity} type="bar" />
                </div>
                <div className={s.experiment_status}>
                  <div className={s.chart_title}>Experiments status</div>
                  <Chart data={data.experimentStatusFrequency} type="pie" />
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
                        style={{ marginRight: '10px' }}
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
                        marginBottom="8px"
                      />
                      <InfrastructureInfo
                        modalHandler={handleOpenModal}
                        data={data.latestExperiment.infrastructure}
                        marginBottom="8px"
                      />
                    </div>
                  </div>
                </div>
                <div className={s.info}>
                  <div className={s.info_title}>Latest VM</div>
                  <div className={s.vm_content}>
                    <MachineDetails
                      data={
                        data.latestInfrastructure.machines
                        && data.latestInfrastructure.machines[0]
                      }
                      orientation="vertical"
                    />
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
