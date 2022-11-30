import React from 'react';
import { Skeleton } from '@mui/material';
import { getFormattedDateFromTimeStamp } from '../../core/helpers/dateMethods';
import s from './ProjectTitle.module.scss';

type Props = {
  data: {
    id: string;
    name: string;
    description: string;
    created: string;
  };
  page?: string;
  size?: 'small' | 'large';
  created?: boolean;
  type: 'project' | 'experiment';
  pageData?: any;
};

function ProjectTitle({
  data,
  page,
  type,
  pageData,
  size = 'large',
  created = false,
}: Props) {
  if (type === 'project') {
    return (
      <div className={s.title}>
        {data ? (
          <>
            <div
              className={`${s.name} ${
                size === 'small' ? s.name_sm : s.name_lg
              }`}
            >
              {`${data.name} ${(page !== 'overview' && page) || ''}`}
            </div>
            <div className={s.description}>
              {created
                ? `Created in ${getFormattedDateFromTimeStamp(data.created)}`
                : data.description}
            </div>
          </>
        ) : (
          <Skeleton
            variant="rounded"
            width="400px"
            animation="wave"
            height="75px"
          />
        )}
      </div>
    );
  }
  if (type === 'experiment') {
    return (
      <div className={s.title}>
        {pageData ? (
          <>
            <div
              className={`${s.name} ${
                size === 'small' ? s.name_sm : s.name_lg
              }`}
            >
              {`${pageData.name} ${(page !== 'overview' && page) || ''}`}
            </div>
            <div className={s.description}>
              {`Started in ${getFormattedDateFromTimeStamp(pageData.created)}`}
            </div>
          </>
        ) : (
          <Skeleton
            variant="rounded"
            width="400px"
            animation="wave"
            height="75px"
          />
        )}
      </div>
    );
  }
  return null;
}

export default ProjectTitle;
