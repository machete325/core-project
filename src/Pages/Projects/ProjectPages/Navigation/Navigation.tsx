import React from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrumbsContainer from '../../../../components/Breadcrumbs/BreadcrumbsContainer';
import GraphNavigation from '../GraphNavigation/GraphNavigation';
import UserProfile from '../../../../components/UserProfile/UserProfile';
import { useAppDispatch } from '../../../../core/redux/store';
import s from './Navigation.module.scss';
import { clearExperimentsData } from '../../../../core/redux/projects/experiments/actions';
import { clearOneProjectData } from '../../../../core/redux/projects/actions';
import { clearOverview } from '../../../../core/redux/projects/overview/actions';
import { IProject } from '../../../../types/project/project';
import { clearDatasetsData } from '../../../../core/redux/projects/datasets/actions';
import { clearMonitoringData } from '../../../../core/redux/projects/monitoring/actions';
import { clearInfrastructureData } from '../../../../core/redux/projects/infrastructure/actions';

type Props = {
  data: IProject;
};

function Navigation({ data }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    navigate('/main/projects');
    dispatch(clearOverview());
    dispatch(clearExperimentsData());
    dispatch(clearOneProjectData());
    dispatch(clearDatasetsData());
    dispatch(clearMonitoringData());
    dispatch(clearInfrastructureData());
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
          <div className={s.text}>All projects</div>
        </div>
        <BreadcrumbsContainer data={data} />
      </div>
      <div className={s.user_container}>
        <GraphNavigation data={data} />
        <UserProfile />
      </div>
    </div>
  );
}

export default Navigation;
