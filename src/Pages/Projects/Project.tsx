import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import StatusIndicator from '../../components/StatusIndicator/StatusIndicator';
import { getFormattedDateFromTimeStamp } from '../../core/helpers/dateMethods';
import { IProject } from '../../types/project/project';
import s from './Projects.module.scss';
import StatusTag from '../../components/StatusTag/StatusTag';
import MetricsInfo from '../../components/ExperimentComponents/MetricsInfo/MetricsInfo';
// import { fetchProjectOverview } from '../../core/redux/projects/actions';
// import { useAppDispatch } from '../../core/redux/store';
import { getProjectOverview } from '../../core/redux/projects/selectors';

type Props = {
  data: IProject;
  handleChooseProject: (id: string) => void;
  handleFavourite: (e: React.MouseEvent<HTMLImageElement>) => void;
  // signal: AbortSignal;
};

function Projects({
  data,
  handleChooseProject,
  handleFavourite,
}: // signal,
Props) {
  // const dispatch = useAppDispatch();
  const overview = useSelector(getProjectOverview)[data.id];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [overview]);

  // useEffect(() => {
  //   if (!overview) {
  //     setLoading(true);
  //     dispatch(fetchProjectOverview(data.id, signal));
  //   }
  // }, []);

  const returnTotalExperiments = () => {
    if (loading) {
      return (
        <Skeleton
          variant="rounded"
          width="100%"
          animation="wave"
          height="19px"
        />
      );
    }
    if (overview) {
      return `${overview.totalNumberOfExperiments} ${
        overview.totalNumberOfExperiments
        && overview.totalNumberOfExperiments > 1
          ? 'experiments'
          : 'experiment'
      }`;
    }
    return 'No data about experiments';
  };

  const returnTags = () => {
    if (
      overview
      && Object.keys(overview.latestExperiment.metrics.items).length !== 0
    ) {
      return (
        <div className={s.model_configuration}>
          {loading ? (
            <div className={s.project_loader}>
              <Skeleton
                variant="rounded"
                width="100%"
                animation="wave"
                height="100%"
              />
            </div>
          ) : (
            <MetricsInfo
              data={overview.latestExperiment.metrics.items}
              limiter={2}
            />
          )}
        </div>
      );
    }
    return (
      <div className={s.model_configuration_mock}>
        {loading ? (
          <div className={s.project_loader}>
            <Skeleton
              variant="rounded"
              width="100%"
              animation="wave"
              height="100%"
            />
          </div>
        ) : (
          <>
            <div key={1}>
              <span className={s.metric_title}>Not available</span>
              <StatusTag usedValue={undefined} totalValue={undefined} />
            </div>
            <div key={2}>
              <span className={s.metric_title}>Not available</span>
              <StatusTag usedValue={undefined} totalValue={undefined} />
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div
      key={data.id}
      className={s.card_container}
      role="presentation"
      onClick={() => handleChooseProject(data.id)}
      id={data.id}
    >
      <img
        src={data.imageUrl ? data.imageUrl : '/images/project/projectImage.png'}
        width="268px"
        height="100px"
        alt={data.name}
      />
      <span className={s.status_indicator}>
        <StatusIndicator isArchive={data.isArchived} />
      </span>
      <div className={s.content_container}>
        <div className={s.project_title}>{data.name}</div>
        <div className={s.total_experiments}>{returnTotalExperiments()}</div>
        {returnTags()}
        <div className={s.additional_information}>
          <div className={s.budget_container}>
            {loading ? (
              <Skeleton
                variant="rounded"
                width="100%"
                animation="wave"
                height="22px"
              />
            ) : (
              <>
                <div>Budget</div>
                <StatusTag
                  usedValue={overview?.latestInfrastructure.usedBudget}
                  totalValue={overview?.latestInfrastructure.totalBudget}
                  currency={overview?.latestInfrastructure.currency}
                />
              </>
            )}
          </div>
          <div className={s.project_date_container}>
            <div className={s.project_date}>
              {`Created ${getFormattedDateFromTimeStamp(data.created)}`}
            </div>
            <div className={s.project_date}>
              {`Edited ${getFormattedDateFromTimeStamp(data.created)}`}
            </div>
          </div>
        </div>
      </div>
      <div className={s.actions_container}>
        <div>
          <img
            id={data.id}
            role="presentation"
            src="/images/icons/Star.svg"
            alt="Star"
            onClick={handleFavourite}
          />
        </div>
        <div className={s.actions}>
          <div>
            <img
              id={data.id}
              role="presentation"
              src="/images/icons/Copy.svg"
              alt="Copy"
              onClick={handleFavourite}
            />
          </div>
          <div>
            <img
              id={data.id}
              role="presentation"
              src="/images/icons/TrashSimple.svg"
              alt="TrashSimple"
              onClick={handleFavourite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
