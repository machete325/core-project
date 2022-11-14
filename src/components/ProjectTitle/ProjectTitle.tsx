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
};

function ProjectTitle({
  data, page, size = 'large', created = false,
}: Props) {
  return (
    <div className={s.title}>
      {data ? (
        <>
          <div
            className={`${s.name} ${size === 'small' ? s.name_sm : s.name_lg}`}
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

export default ProjectTitle;
