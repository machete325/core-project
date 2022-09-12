import React, { useEffect, useMemo, useState } from 'react';
import {
  Link, useLocation, Outlet, useParams, useNavigate,
} from 'react-router-dom';

import NavigateProjectItem from '../../components/NavigateProjectItem/NavigateProjectItem';
import RecentlyOpened from '../../components/RecentlyOpened/RecentlyOpened';
import InputField from '../../components/SearchField/InputField';
import checkPath from '../../core/helpers/checkPath';
import s from './Project.module.scss';

const navigateProjectConfig = [
  {
    id: 1,
    path: 'overview',
    text: 'Projects',
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

const recentlyData = [
  {
    id: 1,
    category: 'experiments',
    name: 'Experiment 3',
    check: false,
  },
  {
    id: 2,
    category: 'experiments',
    name: 'Experiment 1',
    check: false,
  },
  {
    id: 3,
    category: 'experiments',
    name: 'Experiment 2',
    check: false,
  },
  {
    id: 4,
    category: 'datasets',
    name: 'Odyssey demand',
    check: false,
  },
  {
    id: 5,
    category: 'datasets',
    name: 'Dataset 2.0.3',
    check: false,
  },
];

function ProjectContainer() {
  const { pathname } = useLocation();
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (pathname === `/project/${projectId}`) {
      navigate(`../${projectId}/overview`);
    }
  }, []);

  const checkLinkPath = (linkPath: string) => {
    const memoCheckLinkPath = useMemo(
      () => checkPath(linkPath, pathname, '/project/', 'overview', 'SalesPredictionKaggle'),
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
            <div className={s.title_name}>Demand Forecasting</div>
            <div className={s.title_date}>Created in 20.12.2022</div>
          </div>
          <div className={s.title_status}>Active</div>
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
          <RecentlyOpened data={recentlyData} />
        </div>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default ProjectContainer;
