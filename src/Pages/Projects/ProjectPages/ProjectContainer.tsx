import React, { useEffect, useMemo, useState } from 'react';
import {
  Link,
  useLocation,
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import {
  oneProjectData,
  recentlyOpenedData,
} from '../../../core/redux/projects/selectors';
import { useAppDispatch } from '../../../core/redux/store';
import NavigateProjectItem from '../../../components/NavigateProjectItem/NavigateProjectItem';
import RecentlyOpened from '../../../components/RecentlyOpened/RecentlyOpened';
import InputField from '../../../components/SearchField/InputField';
import checkUrlPath from '../../../core/helpers/checkUrlPath';
import {
  getRecentlyData,
  checkRecentlyData,
  getProjectData,
} from '../../../core/redux/projects/actions';
import s from './Project.module.scss';
import StatusIndicator from '../../../components/StatusIndicator/StatusIndicator';
import { getFormattedDateFromTimeStamp } from '../../../core/helpers/dateMethods';

const navigateProjectConfig = [
  {
    id: 1,
    path: 'overview',
    text: 'Overview',
    imgSrc: '/images/project/overview.svg',
    active: true,
  },
  {
    id: 2,
    path: 'monitoring',
    text: 'Monitoring',
    imgSrc: '/images/project/monitoring.svg',
    active: false,
  },
  {
    id: 3,
    path: 'experiments',
    text: 'Experiments',
    imgSrc: '/images/project/experiments.svg',
    active: false,
  },
  {
    id: 4,
    path: 'datasets',
    text: 'Datasets',
    imgSrc: '/images/project/datasets.svg',
    active: false,
  },
  {
    id: 5,
    path: 'infrastructure',
    text: 'Infrastructure',
    imgSrc: '/images/project/infrastructure.svg',
    active: false,
  },
  {
    id: 6,
    path: 'code',
    text: 'Code',
    imgSrc: '/images/project/code.svg',
    active: false,
  },
  {
    id: 7,
    path: 'reports',
    text: 'Reports',
    imgSrc: '/images/project/reports.svg',
    active: false,
  },
];

function ProjectContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const recentlyOpened = useSelector(recentlyOpenedData);
  const projectData = useSelector(oneProjectData);
  const { pathname } = useLocation();
  const { projectId } = useParams();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (pathname === `/project/${projectId}`) {
      navigate(`../${projectId}/experiments`);
    }
  }, []);

  useEffect(() => {
    dispatch(getProjectData(projectId!));
    dispatch(getRecentlyData(projectId!));
  }, []);

  const handleCheckRecentyOpened = (id: string) => {
    dispatch(checkRecentlyData(id));
  };

  const checkLinkPath = (linkPath: string) => {
    const memoCheckLinkPath = useMemo(
      () => checkUrlPath(linkPath, pathname, '/project/', 'overview', projectId),
      [linkPath, pathname],
    );
    return memoCheckLinkPath;
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.menu}>
        <div className={s.title_container}>
          <div className={s.title}>
            {projectData ? (
              <>
                <div className={s.title_name}>{projectData.name}</div>
                <div className={s.title_date}>
                  {`Created in ${getFormattedDateFromTimeStamp(
                    projectData.created,
                  )}`}
                </div>
              </>
            ) : (
              <Skeleton
                variant="rounded"
                width="210px"
                animation="wave"
                height="53px"
                style={{ marginRight: '10px', backgroundColor: '#4e4e52' }}
              />
            )}
          </div>
          <StatusIndicator isArchive={projectData && projectData.isArchive} />
        </div>
        <div className={s.search_container}>
          <InputField
            type="text"
            name="search"
            placeholder="Search in project"
            value={value}
            variant="search"
            width="294px"
            onChange={handleChange}
          />
        </div>
        <nav className={s.navigation}>
          {navigateProjectConfig.map((link) => (
            <Link
              className={checkLinkPath(link.path) ? s.active : undefined}
              key={link.id}
              to={link.path}
            >
              <NavigateProjectItem
                text={link.text}
                active={checkLinkPath(link.path)}
                imgSrc={link.imgSrc}
              />
            </Link>
          ))}
        </nav>
        <div className={s.recently_container}>
          <div className={s.recently_title}>Recently opened</div>
          <RecentlyOpened
            data={recentlyOpened}
            handleCheckRecentyOpened={handleCheckRecentyOpened}
          />
        </div>
      </div>
      <div id="project_content" className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default ProjectContainer;
