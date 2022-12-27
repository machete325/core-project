import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import { oneProjectData } from '../../../../core/redux/projects/selectors';
import { useAppDispatch } from '../../../../core/redux/store';
import {
  cancelRequest,
  checkAllMonitoring,
  checkMonitoring,
  fetchMonitoring,
  resetErrors,
  setMonitoringFetching,
} from '../../../../core/redux/projects/monitoring/actions';
import {
  monitoringSelector,
  getTotalCountMonitoring,
} from '../../../../core/redux/projects/monitoring/selectors';
import Loader from '../../../../components/Loader/Loader';
import Button from '../../../../components/Button/Button';
import { ChoosedTab } from '../../../../components/ModalTabs/types';
import monitoringConfig from './Monitoring.config';
import ModalTabs from '../../../../components/ModalTabs/ModalTabs';
import Monitoring from './Monitoring';

import s from './Monitoring.module.scss';

function ProjectMonitoringContainer() {
  const dispatch = useAppDispatch();
  const totalCount = useSelector(getTotalCountMonitoring);
  const projectData = useSelector(oneProjectData);
  const {
    data, loading, currentPage, fetching,
  } = useSelector(monitoringSelector);

  const [isExistScroll, setIsExistScroll] = useState(false);
  const [isGetMoreActive, setIsGetMoreActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'monitoring',
  });
  const initialPageSize = 3;
  const pageSize = 3;

  const controller = new AbortController();
  const { signal } = controller;

  const amountDatasets = useMemo(() => Object.keys(data).length, [data]);

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkAllMonitoring(checked));
  };

  const handleCheck = (id: string) => {
    dispatch(checkMonitoring(id));
  };

  const fetchData = (pageSizeArg: number) => {
    dispatch(fetchMonitoring(projectData.id, currentPage, pageSizeArg, signal));
  };

  const getMoreHandler = () => {
    setIsGetMoreActive(true);
    dispatch(setMonitoringFetching(true));
    fetchData(pageSize);
  };

  useEffect(() => {
    dispatch(resetErrors());
  }, []);

  useEffect(() => {
    if (projectData && amountDatasets === 0 && !loading) {
      fetchData(initialPageSize);
    }
    return () => {
      controller.abort();
      dispatch(cancelRequest());
    };
  }, [projectData]);

  // if isGetMoreActive === true it's mean button "Get More" was clicked

  useEffect(() => {
    if (fetching && !isGetMoreActive) {
      fetchData(pageSize);
    }
    if (!fetching && isGetMoreActive) {
      setIsGetMoreActive(false);
    }
  }, [fetching]);

  const scrollHandler = (e: any) => {
    if (!isExistScroll) {
      setIsExistScroll(true);
    }
    if (
      e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100
      && amountDatasets < (totalCount || 0)
    ) {
      dispatch(setMonitoringFetching(true));
    }
  };

  useEffect(() => {
    const contentContainer = document.querySelector('#project_content');
    if (contentContainer) {
      contentContainer.addEventListener('scroll', scrollHandler);
    }
    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [totalCount, data]);

  const handleOpenModal = (activeTab: string, id: string) => {
    const monitoring = data[id];
    console.log(monitoring);
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: monitoring });
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <ModalTabs
        open={open}
        handleClose={handleCloseModal}
        data={choosedTab}
        projectData={projectData}
        config={monitoringConfig}
      />
      <Navigation data={projectData} />
      <div className={s.header}>
        <ProjectTitle type="project" data={projectData} page="monitoring" />
        <div className={s.buttons}>
          <Button disabled style={{ marginRight: '20px' }}>
            <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
            Compare models
          </Button>
          <Button>
            <img alt="Plus" src="/images/icons/Plus.svg" />
            New Model
          </Button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Monitoring
          handleCheckAll={handleCheckAll}
          handleCheck={handleCheck}
          handleOpenModal={handleOpenModal}
          fetching={fetching}
          isExistScroll={isExistScroll}
          getMoreHandler={getMoreHandler}
          projectData={projectData}
          amountDatasets={amountDatasets}
          totalCount={totalCount}
          data={data}
        />
      )}
    </div>
  );
}

export default ProjectMonitoringContainer;
