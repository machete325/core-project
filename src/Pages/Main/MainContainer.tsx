import React from 'react';
import { useLocation } from 'react-router-dom';
import Main from './Main';
import packageJson from '../../../package.json';
import { NavigateConfig } from './types';

const navigateConfig: NavigateConfig = [
  {
    id: 1,
    path: 'projects',
    text: 'Projects',
    imgSrc: 'images/projects.svg',
    active: true,
  },
  {
    id: 2,
    path: 'monitoring',
    text: 'Monitoring',
    imgSrc: 'images/monitoring.svg',
    active: false,
  },
  {
    id: 3,
    path: 'experiments',
    text: 'Experiments',
    imgSrc: 'images/experiments.svg',
    active: false,
  },
  {
    id: 4,
    path: 'datasets',
    text: 'Datasets',
    imgSrc: 'images/datasets.svg',
    active: false,
  },
  {
    id: 5,
    path: 'infrastructure',
    text: 'Infrastructure',
    imgSrc: 'images/infrastructure.svg',
    active: false,
  },
  {
    id: 6,
    path: 'code',
    text: 'Code',
    imgSrc: 'images/code.svg',
    active: false,
  },
  {
    id: 7,
    path: 'reports',
    text: 'Reports',
    imgSrc: 'images/reports.svg',
    active: false,
  },
];

function MainContainer() {
  const { pathname } = useLocation();
  const { version } = packageJson;

  return <Main pathname={pathname} version={version} navigateConfig={navigateConfig} />;
}

export default MainContainer;
