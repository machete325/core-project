import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavigateItem from '../../components/NavItem/NavigateItem';

import s from './Main.module.scss';
import { NavigateConfig } from './types';

type Props = {
  pathname: string;
  version: string;
  navigateConfig: NavigateConfig;
};

function Main({ pathname, version, navigateConfig }: Props) {
  return (
    <div className={s.wrapper}>
      <nav className={s.navigation}>
        <div>
          <div className={s.logo}>
            <img alt="Logo" src="images/logo.svg" />
          </div>
          {navigateConfig.map((link) => (
            <Link className={pathname === `/${link.path}` && s.active} key={link.id} to={link.path}>
              <NavigateItem
                text={link.text}
                active={pathname === `/${link.path}`}
                imgSrc={link.imgSrc}
              />
            </Link>
          ))}
        </div>
        <div className={s.version}>{`V.${version}`}</div>
      </nav>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
