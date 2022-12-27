import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { VariantType, useSnackbar } from 'notistack';
import Button from '../../../../components/Button/Button';
import ModalTabs from '../../../../components/ModalTabs/ModalTabs';
import {
  ChoosedCompareTab,
  ChoosedTab,
} from '../../../../components/ModalTabs/types';
import {
  checkAllExperiments,
  fetchExperiments,
  checkExperiment,
  setExperimentsFetching,
  resetErrors,
  cancelRequest,
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
import CompareModalTabs from '../../../../components/ModalTabs/CompareModalTabs';

function ProjectExperimentsContainer() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const projectData = useSelector(oneProjectData);
  const {
    data, loading, currentPage, fetching,
  } = useSelector(experimentsSelector);
  const totalCount = useSelector(getTotalCountExperiments);
  const [choosedTab, setChoosedTab] = useState<ChoosedTab>({
    type: undefined,
    data: undefined,
    page: 'experiments',
  });
  const [choosedCompareTab, setChoosedCompareTab] = useState<ChoosedCompareTab>(
    {
      type: undefined,
      data: undefined,
      page: 'experiments',
      amountCompareItems: undefined,
    },
  );
  const [isExistScroll, setIsExistScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCompare, setOpenCompare] = useState(false);
  const [isGetMoreActive, setIsGetMoreActive] = useState(false);
  const initialPageSize = 3;
  const pageSize = 3;
  const amountExperiments = useMemo(() => Object.keys(data).length, [data]);

  const handleShowSnackBar = (variant: VariantType, text: string) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(text, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    });
  };

  const controller = new AbortController();
  const { signal } = controller;

  const fetchData = (pageSizeArg: number) => {
    dispatch(
      fetchExperiments(projectData.id, currentPage, pageSizeArg, signal),
    );
  };

  const getMoreHandler = () => {
    setIsGetMoreActive(true);
    dispatch(setExperimentsFetching(true));
    fetchData(pageSize);
  };

  useEffect(() => {
    dispatch(resetErrors());
  }, []);

  useEffect(() => {
    if (projectData && amountExperiments === 0 && !loading) {
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
      && amountExperiments < (totalCount || 0)
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

  const amountCheckedExperiments = useMemo(
    () => Object.values(data).filter((experiment) => experiment.checked).length,
    [data],
  );

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
      'experiments',
      experiment.name,
      projectData.id,
    );
    dispatch(getRecentlyData(projectData.id));
    setOpen(true);
    setChoosedTab({ ...choosedTab, type: activeTab, data: experiment });
  };

  const handleOpenCompareModal = () => {
    const experiments = Object.values(data).filter(
      (experiment) => experiment.checked,
    );
    if (experiments.length <= 4) {
      setChoosedCompareTab({
        ...choosedTab,
        data: experiments,
        amountCompareItems: experiments.length,
      });
      setOpenCompare(true);
    } else {
      handleShowSnackBar(
        'error',
        'Comparison elements must be equal to or less than 4',
      );
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseCompareModal = () => {
    setOpenCompare(false);
  };

  return (
    <div className={s.wrapper}>
      <CompareModalTabs
        open={openCompare}
        handleClose={handleCloseCompareModal}
        data={choosedCompareTab}
        projectData={projectData}
        config={experimentConfig}
      />
      <ModalTabs
        open={open}
        handleClose={handleCloseModal}
        data={choosedTab}
        projectData={projectData}
        config={experimentConfig}
      />
      <Navigation data={projectData} />
      <div className={s.header}>
        <ProjectTitle type="project" data={projectData} page="experiments" />
        <div className={s.buttons}>
          <Button
            disabled={amountCheckedExperiments < 2}
            style={{ marginRight: '20px', minWidth: '276px' }}
            onClick={handleOpenCompareModal}
          >
            <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
            {`Compare experiments ${
              amountCheckedExperiments > 1
                ? `(${amountCheckedExperiments})`
                : ''
            }`}
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
          isExistScroll={isExistScroll}
          getMoreHandler={getMoreHandler}
          projectData={projectData}
          amountExperiments={amountExperiments}
          totalCount={totalCount}
          data={data}
        />
      )}
    </div>
  );
}

export default ProjectExperimentsContainer;
