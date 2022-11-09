import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import { ChoosedTab } from '../../../../components/Modal/types';
import {
  checkAllExperiments,
  fetchExperiments,
  checkExperiment,
  setExperimentsFetching,
} from '../../../../core/redux/projects/experiments/actions';
import {
  experimentsSelector,
  getTotalCountExperiments,
} from '../../../../core/redux/projects/experiments/selectors';
import { useAppDispatch } from '../../../../core/redux/store';
import { getRecentlyData } from '../../../../core/redux/projects/actions';
import Navigation from '../Navigation/Navigation';
import ProjectTitle from '../../../../components/ProjectTitle/ProjectTitle';
import experimentConfig from './Experiment.config';
import updateRecentlyOpened from '../../../../core/helpers/updateRecentlyOpened';
import Experiments from './Experiments';
import s from './Experiments.module.scss';
import { oneProjectData } from '../../../../core/redux/projects/selectors';
import Loader from '../../../../components/Loader/Loader';

function ProjectExperimentsContainer() {
  const dispatch = useAppDispatch();
  const projectData = useSelector(oneProjectData);
  const {
    data, loading, currentPage, fetching,
  } = useSelector(experimentsSelector);
  const totalCount = useSelector(getTotalCountExperiments);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'experiment',
  });
  const [open, setOpen] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    if (projectData && Object.keys(data).length === 0 && !loading) {
      dispatch(fetchExperiments(projectData.id, currentPage, pageSize));
    }
  }, [projectData]);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchExperiments(projectData.id, currentPage, pageSize));
    }
  }, [fetching]);

  const scrollHandler = (e: any) => {
    const amountExperiments = Object.keys(data).length;
    if (
      e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100
      && amountExperiments < totalCount
    ) {
      dispatch(setExperimentsFetching(true));
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

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkAllExperiments(checked));
  };

  const handleCheck = (id: string) => {
    dispatch(checkExperiment(id));
  };

  const handleOpenModal = (activeTab: string, id: string) => {
    const experiment = data[id];
    updateRecentlyOpened(
      experiment.id,
      'experiment',
      experiment.name,
      projectData.id,
    );
    dispatch(getRecentlyData(projectData.id));
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      {projectData ? (
        <>
          <Modal
            open={open}
            handleClose={handleClose}
            data={choosedTab}
            projectData={projectData}
            config={experimentConfig}
          />
          <Navigation data={projectData} />
          <div className={s.header}>
            <ProjectTitle data={projectData} page="experiments" />
            <div className={s.buttons}>
              <Button disabled style={{ marginRight: '20px' }}>
                <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
                Compare experiments
              </Button>
              <Button>
                <img alt="Plus" src="/images/icons/Plus.svg" />
                New experiment
              </Button>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <Experiments
              handleOpenModal={handleOpenModal}
              handleCheckAll={handleCheckAll}
              handleCheck={handleCheck}
              fetching={fetching}
              data={data}
            />
          )}
        </>
      ) : null}
    </div>
  );
}

export default ProjectExperimentsContainer;
