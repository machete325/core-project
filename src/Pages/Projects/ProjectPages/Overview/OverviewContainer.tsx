import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import s from './Overview.module.scss';
import { oneProjectData } from '../../../../core/redux/projects/selectors';

function ProjectOverviewContainer() {
  const projectData = useSelector(oneProjectData);

  return (
    <div className={s.wrapper}>
      {projectData ? (
        <>
          <Navigation data={projectData} />
          <div className={s.header}>
            <ProjectTitle data={projectData} page="overview" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProjectOverviewContainer;
