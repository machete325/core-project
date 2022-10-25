import React from 'react';
import { getFormattedDate } from '../../core/helpers/dateMethods';
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
      <div className={`${s.name} ${size === 'small' ? s.name_sm : s.name_lg}`}>
        {`${data.name} ${(page !== 'overview' && page) || ''}`}
      </div>
      <div className={s.description}>
        {created
          ? `Created in ${getFormattedDate(data.created)}`
          : data.description}
      </div>
    </div>
  );
}

export default ProjectTitle;
