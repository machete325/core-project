import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Main from './Main';
import packageJson from '../../../package.json';
import { NavigateConfig } from './types';

const navigateConfig: NavigateConfig = [
  {
    id: 1,
    path: 'projects',
    text: 'Projects',
    imgSrc: '/images/projects.png',
    active: true,
  },
  {
    id: 2,
    path: 'monitoring',
    text: 'Monitoring',
    imgSrc: '/images/monitoring.png',
    active: false,
  },
  {
    id: 3,
    path: 'experiments',
    text: 'Experiments',
    imgSrc: '/images/experiments.png',
    active: false,
  },
  {
    id: 4,
    path: 'datasets',
    text: 'Datasets',
    imgSrc: '/images/datasets.png',
    active: false,
  },
  {
    id: 5,
    path: 'infrastructure',
    text: 'Infrastructure',
    imgSrc: '/images/infrastructure.png',
    active: false,
  },
  {
    id: 6,
    path: 'code',
    text: 'Code',
    imgSrc: '/images/code.png',
    active: false,
  },
  {
    id: 7,
    path: 'reports',
    text: 'Reports',
    imgSrc: '/images/reports.png',
    active: false,
  },
];

function MainContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { version } = packageJson;

  useEffect(() => {
    if (pathname === '/' || pathname === '/main') {
      navigate('../main/projects');
    }
  }, []);

  return <Main pathname={pathname} version={version} navigateConfig={navigateConfig} />;
}

export default MainContainer;
