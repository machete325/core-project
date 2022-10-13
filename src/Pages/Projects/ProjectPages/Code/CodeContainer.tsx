import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import s from './Code.module.scss';
import { oneProjectData } from '../../../../core/redux/projects/selectors';

function ProjectCodeContainer() {
  const projectData = useSelector(oneProjectData);
  console.log(projectData);
  return (
    <div className={s.wrapper}>
      {projectData ? (
        <>
          <Navigation data={projectData} />
          <div className={s.header}>
            <ProjectTitle data={projectData} page="code" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProjectCodeContainer;
