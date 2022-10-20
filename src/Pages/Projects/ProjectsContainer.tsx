import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../core/redux/store';
import { fetchProjects } from '../../core/redux/projects/actions';
import { projectsData } from '../../core/redux/projects/selectors';
import InputField from '../../components/SearchField/InputField';
import UserProfile from '../../components/UserProfile/UserProfile';
import Project from './Project';
import { IProject } from './types';
import s from './Projects.module.scss';

function ProjectsContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const data: { [key: string]: IProject } = useSelector(projectsData);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleChooseProject = (id: string) => {
    navigate(`../../project/${id}`, { replace: false });
  };

  const handleFavourite = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    console.log(e.target);
  };

  return (
    <>
      <header>
        <div className={s.header_container}>
          <div className={s.title_container}>
            <div className={s.title_page}>
              Welcome George, let`s view your active projects.
            </div>
            <div className={s.description}>You have 24 active projects.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={s.input_container}>
              <InputField
                type="text"
                name="search"
                placeholder="Search projects"
                value={value}
                variant="search"
                width="972px"
                onChange={handleChange}
              />
            </div>
            <UserProfile />
          </div>
        </div>
      </header>
      <main>
        <div className={s.title}>All projects</div>
        <div className={s.card_wrapper}>
          {Object.values(data).map((project: IProject) => (
            <Project
              key={project.id}
              data={project}
              handleChooseProject={handleChooseProject}
              handleFavourite={handleFavourite}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectsContainer;
