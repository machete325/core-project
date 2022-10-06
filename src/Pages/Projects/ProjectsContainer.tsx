import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../core/redux/store';
import { fetchProjects } from '../../core/redux/projects/actions';
import { projectsData } from '../../core/redux/projects/selectors';
import InputField from '../../components/SearchField/InputField';
import s from './Projects.module.scss';
import UserProfile from '../../components/UserProfile/UserProfile';

function ProjectsContainer() {
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispacth(fetchProjects());
  }, []);

  const data = useSelector(projectsData);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleChooseProject = (e: any) => {
    navigate(`../../project/${e.target.id}`, { replace: false });
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
          {Object.values(data).map((project: any) => (
            <div
              className={s.card_container}
              role="presentation"
              onClick={handleChooseProject}
              id={project.id}
            >
              {project.name}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectsContainer;
