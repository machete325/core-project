import React from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrumbsContainer from '../../../../components/Breadcrumbs/BreadcrumbsContainer';
import GraphNavigation from '../../../../components/GraphNavigation/GraphNavigation';
import UserProfile from '../../../../components/UserProfile/UserProfile';
import s from './Navigation.module.scss';

interface IDdata {
  id: string;
  name: string;
  page: string;
  description: string;
}

type Props = {
  data: IDdata;
};

function Navigation({ data }: Props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/main/projects');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.navigation}>
        <div
          role="presentation"
          onClick={handleNavigate}
          className={s.all_projects}
        >
          <div className={s.image}>
            <img alt="CaretLeft" src="/images/icons/CaretLeft.svg" />
          </div>
          <div className={s.text}> All projects</div>
        </div>
        <BreadcrumbsContainer data={data} />
      </div>
      <div className={s.user_container}>
        <GraphNavigation />
        <UserProfile />
      </div>
    </div>
  );
}

export default Navigation;
