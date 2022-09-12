import React from 'react';
import s from './ProjectTitle.module.scss';

type Props = {
  data: {
    id: string;
    name: string;
    page: string;
    description: string;
  };
  size?: 'small' | 'large';
};

function ProjectTitle({ data, size = 'large' }: Props) {
  return (
    <div className={s.title}>
      <div className={`${s.name} ${size === 'small' ? s.name_sm : s.name_lg}`}>
        {`${data.name} ${data.page}`}
      </div>
      <div className={s.description}>{data.description}</div>
    </div>
  );
}

export default ProjectTitle;
