import React, { useMemo, useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

import NavigateProjectItem from '../../components/NavigateProjectItem/NavigateProjectItem';
import InputField from '../../components/SearchField/InputField';
import checkPath from '../../helpers/checkPath';
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

function ProjectContainer() {
  const { pathname } = useLocation();
  const [value, setValue] = useState('');

  const checkLinkPath = (linkPath: string) => {
    const memoCheckLinkPath = useMemo(
      () => checkPath(linkPath, pathname, '/project/', 'overview', 1),
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
            <Link className={checkLinkPath(link.path) && s.active} key={link.id} to={link.path}>
              <NavigateProjectItem
                text={link.text}
                active={checkLinkPath(link.path)}
                imgSrc={link.imgSrc}
              />
            </Link>
          ))}
        </nav>
        <div>Recently</div>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default ProjectContainer;
