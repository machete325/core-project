import React from 'react';
import s from './ProjectVersion.module.scss';

type Props = {
  version: string | undefined;
};

function ProjectVersion({ version }: Props) {
  return (
    <div
      className={s.button}
      style={{ backgroundColor: '#9A86FD', color: '#ffffff' }}
    >
      {version}
    </div>
  );
}

export default ProjectVersion;
