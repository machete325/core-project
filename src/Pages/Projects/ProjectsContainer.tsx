import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../core/redux/store';
import { fetchProjects } from '../../core/projects/actions';
import { projectsSelector } from '../../core/projects/selectors';

function ProjectsContainer() {
  const dispacth = useAppDispatch();

  useEffect(() => {
    dispacth(fetchProjects());
  }, []);

  const data = useSelector(projectsSelector);
  console.log(data);

  return <div>Projects</div>;
}

export default ProjectsContainer;
