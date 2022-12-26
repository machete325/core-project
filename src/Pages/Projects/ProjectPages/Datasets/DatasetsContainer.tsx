import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import { oneProjectData } from '../../../../core/redux/projects/selectors';
import { useAppDispatch } from '../../../../core/redux/store';
import {
  cancelRequest,
  checkAllDatasets,
  checkDataset,
  fetchDatasets,
  resetErrors,
  setDatasetsFetching,
} from '../../../../core/redux/projects/datasets/actions';
import {
  datasetsSelector,
  getTotalCountDatasets,
} from '../../../../core/redux/projects/datasets/selectors';
import Datasets from './Datasets';
import Loader from '../../../../components/Loader/Loader';
import Button from '../../../../components/Button/Button';
import { ChoosedTab } from '../../../../components/ModalTabs/types';
import updateRecentlyOpened from '../../../../core/helpers/updateRecentlyOpened';
import { getRecentlyData } from '../../../../core/redux/projects/actions';
import datasetConfig from './Dataset.config';
import ModalTabs from '../../../../components/ModalTabs/ModalTabs';

import s from './Datasets.module.scss';

function ProjectDatasetsContainer() {
  const dispatch = useAppDispatch();
  const totalCount = useSelector(getTotalCountDatasets);
  const projectData = useSelector(oneProjectData);
  const {
    data, loading, currentPage, fetching,
  } = useSelector(datasetsSelector);

  const [isExistScroll, setIsExistScroll] = useState(false);
  const [isGetMoreActive, setIsGetMoreActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'datasets',
  });
  const initialPageSize = 3;
  const pageSize = 3;

  const controller = new AbortController();
  const { signal } = controller;

  const amountDatasets = useMemo(() => Object.keys(data).length, [data]);

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkAllDatasets(checked));
  };

  const handleCheck = (id: string) => {
    dispatch(checkDataset(id));
  };

  const fetchData = (pageSizeArg: number) => {
    dispatch(fetchDatasets(projectData.id, currentPage, pageSizeArg, signal));
  };

  const getMoreHandler = () => {
    setIsGetMoreActive(true);
    dispatch(setDatasetsFetching(true));
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
      dispatch(setDatasetsFetching(true));
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
    const dataset = data[id];
    updateRecentlyOpened(
      dataset.id,
      'datasets',
      `${dataset.name} ${dataset.tag}`,
      projectData.id,
    );
    dispatch(getRecentlyData(projectData.id));
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: dataset });
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
        config={datasetConfig}
      />
      <Navigation data={projectData} />
      <div className={s.header}>
        <ProjectTitle type="project" data={projectData} page="datasets" />
        <div className={s.buttons}>
          <Button disabled style={{ marginRight: '20px' }}>
            <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
            Compare datasets
          </Button>
          <Button>
            <img alt="Plus" src="/images/icons/Plus.svg" />
            New Dataset
          </Button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Datasets
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

export default ProjectDatasetsContainer;
