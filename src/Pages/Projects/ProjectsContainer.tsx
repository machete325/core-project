import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../core/redux/store';
import { fetchProjects } from '../../core/redux/projects/actions';
import { projectsData } from '../../core/redux/projects/selectors';
import InputField from '../../components/SearchField/InputField';
import s from './Projects.module.scss';
import UserProfile from '../../components/UserProfile/UserProfile';
import StatusIndicator from '../../components/StatusIndicator/StatusIndicator';
import { geFormattedDate } from '../../core/helpers/formatDate';

function ProjectsContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const data = useSelector(projectsData);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleChooseProject = (id: string) => {
    navigate(`../../project/${id}`, { replace: false });
  };

  const handleFavourite = (e: any) => {
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
          {Object.values(data).map((project: any) => (
            <div
              key={project.id}
              className={s.card_container}
              role="presentation"
              onClick={() => handleChooseProject(project.id)}
              id={project.id}
            >
              <img
                src="/images/project/projectImage.png"
                width="268px"
                height="100px"
                alt={project.name}
              />
              <span className={s.status_indicator}>
                <StatusIndicator isArchive={project.isArchive} />
              </span>
              <div className={s.content_container}>
                <div className={s.project_title}>{project.name}</div>
                <div className={s.total_experiments}>Total experiments</div>
                <div className={s.model_configuration}>
                  <div>RMSE</div>
                  <div>RRSE</div>
                </div>
                <div className={s.additional_information}>
                  <div className={s.budget_container}>
                    <div>Budget</div>
                  </div>
                  <div className={s.project_date_container}>
                    <div className={s.project_date}>
                      {`Created ${geFormattedDate(project.created)}`}
                    </div>
                    <div className={s.project_date}>
                      {`Created ${geFormattedDate(project.created)}`}
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.actions_container}>
                <div>
                  <img
                    id={project.id}
                    role="presentation"
                    src="/images/icons/Star.svg"
                    alt="Star"
                    onClick={handleFavourite}
                  />
                </div>
                <div className={s.actions}>
                  <div>
                    <img
                      id={project.id}
                      role="presentation"
                      src="/images/icons/Copy.svg"
                      alt="Copy"
                      onClick={handleFavourite}
                    />
                  </div>
                  <div>
                    <img
                      id={project.id}
                      role="presentation"
                      src="/images/icons/TrashSimple.svg"
                      alt="TrashSimple"
                      onClick={handleFavourite}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectsContainer;
