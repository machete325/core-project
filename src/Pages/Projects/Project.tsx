import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import StatusIndicator from '../../components/StatusIndicator/StatusIndicator';
import { getFormattedDate } from '../../core/helpers/dateMethods';
import { IMetric, IOverview, IProject } from './types';
import s from './Projects.module.scss';
import { ProjectService } from '../../core/services/projects/Project.service';
import StatusTag from '../../components/StatusTag/StatusTag';

type Props = {
  data: IProject;
  handleChooseProject: (id: string) => void;
  handleFavourite: (e: React.MouseEvent<HTMLImageElement>) => void;
};

function Projects({ data, handleChooseProject, handleFavourite }: Props) {
  const [overview, setOverview] = useState<IOverview | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetchOverview = async () => {
    try {
      setLoading(true);
      const response = await ProjectService.getProjectOverview(data.id, true);
      setOverview(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  const returnTags = () => {
    if (
      overview
      && Object.keys(overview.latestExperiment.metrics.items).length !== 0
    ) {
      const metrics = overview.latestExperiment.metrics.items;
      const markup = Object.values(metrics).map((metric: IMetric, index) => {
        if (index <= 1) {
          return (
            <div key={metric.id}>
              <span className={s.metric_title}>{metric.displayName}</span>
              <StatusTag
                usedValue={metric.value}
                totalValue={metric.threshold}
              />
            </div>
          );
        }
        return null;
      });
      return markup;
    }
    return (
      <>
        <div key={1}>
          <span className={s.metric_title}>Metric</span>
          <StatusTag usedValue={undefined} totalValue={undefined} />
        </div>
        <div key={2}>
          <span className={s.metric_title}>Metric</span>
          <StatusTag usedValue={undefined} totalValue={undefined} />
        </div>
      </>
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
        <div className={s.total_experiments}>
          {`${overview ? overview.totalNumberOfExperiments : ''} ${
            overview
            && overview.totalNumberOfExperiments
            && overview.totalNumberOfExperiments > 1
              ? 'experiments'
              : 'experiment'
          }`}
        </div>
        <div className={s.model_configuration}>
          {loading ? (
            <div className={s.project_loader}>
              <CircularProgress color="inherit" />
            </div>
          ) : (
            returnTags()
          )}
        </div>
        <div className={s.additional_information}>
          <div className={s.budget_container}>
            <div>Budget</div>
            <StatusTag
              usedValue={overview?.latestInfrastructure.usedBudget}
              totalValue={overview?.latestInfrastructure.totalBudget}
              currency={overview?.latestInfrastructure.currency}
            />
          </div>
          <div className={s.project_date_container}>
            <div className={s.project_date}>
              {`Created ${getFormattedDate(data.created)}`}
            </div>
            <div className={s.project_date}>
              {`Created ${getFormattedDate(data.created)}`}
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
