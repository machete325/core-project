import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import s from './Infrastructure.module.scss';
import { oneProjectData } from '../../../../core/redux/projects/selectors';
import { useAppDispatch } from '../../../../core/redux/store';
import {
  getTotalCountInfrastructure,
  infrastructureSelector,
} from '../../../../core/redux/projects/infrastructure/selectors';
import { ChoosedTab } from '../../../../components/ModalTabs/types';
import {
  cancelRequest,
  checkAllInfrastructure,
  checkInfrastructure,
  fetchInfrastructure,
  resetErrors,
  setInfrastructureFetching,
} from '../../../../core/redux/projects/infrastructure/actions';
import ModalTabs from '../../../../components/ModalTabs/ModalTabs';
import infrastructureConfig from './Infrastructure.config';
import Button from '../../../../components/Button/Button';
import Loader from '../../../../components/Loader/Loader';
import Infrastructure from './Infrastructure';

function ProjectInfrastructureContainer() {
  const dispatch = useAppDispatch();
  const totalCount = useSelector(getTotalCountInfrastructure);
  const projectData = useSelector(oneProjectData);
  const {
    data, loading, currentPage, fetching,
  } = useSelector(
    infrastructureSelector,
  );

  const [isExistScroll, setIsExistScroll] = useState(false);
  const [isGetMoreActive, setIsGetMoreActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'infrastructure',
  });
  const initialPageSize = 3;
  const pageSize = 3;

  const controller = new AbortController();
  const { signal } = controller;

  const amountDatasets = useMemo(() => Object.keys(data).length, [data]);

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkAllInfrastructure(checked));
  };

  const handleCheck = (id: string) => {
    dispatch(checkInfrastructure(id));
  };

  const fetchData = (pageSizeArg: number) => {
    dispatch(
      fetchInfrastructure(projectData.id, currentPage, pageSizeArg, signal),
    );
  };

  const getMoreHandler = () => {
    setIsGetMoreActive(true);
    dispatch(setInfrastructureFetching(true));
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
      dispatch(setInfrastructureFetching(true));
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
    const infrastructure = data[id];
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: infrastructure });
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
        config={infrastructureConfig}
      />
      <Navigation data={projectData} />
      <div className={s.header}>
        <ProjectTitle type="project" data={projectData} page="infrastructure" />
        <div className={s.buttons}>
          <Button disabled style={{ marginRight: '20px' }}>
            <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
            Compare machines
          </Button>
          <Button>
            <img alt="Plus" src="/images/icons/Plus.svg" />
            New machine
          </Button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Infrastructure
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

export default ProjectInfrastructureContainer;
