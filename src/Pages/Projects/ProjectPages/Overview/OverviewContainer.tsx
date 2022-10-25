import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import s from './Overview.module.scss';
import { oneProjectData } from '../../../../core/redux/projects/selectors';
import DropDown from '../../../../components/DropDown/OverviewDropdown/DropDown';
import Button from '../../../../components/Button/Button';
import { fetchOverview } from '../../../../core/redux/projects/overview/actions';
import { useAppDispatch } from '../../../../core/redux/store';
import { getOverviewData } from '../../../../core/redux/projects/overview/selectors';
import OverviewStatusTag from '../../../../components/OverviewStatusTag/OverviewStatusTag';

function ProjectOverviewContainer() {
  const dispatch = useAppDispatch();
  const projectData = useSelector(oneProjectData);

  const data = useSelector(getOverviewData);

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
      {Object.keys(data).length !== 0 ? (
        <>
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
          <div className={s.content}>
            <div className={s.tags_container}>
              {Object.keys(tagConfig).map((key: string) => (
                <OverviewStatusTag data={data[key]} config={tagConfig[key]} />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProjectOverviewContainer;
