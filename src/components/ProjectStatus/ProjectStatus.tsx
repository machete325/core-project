import React, { useState, useEffect } from 'react';
import s from './ProjectStatus.module.scss';

type Props = {
  status: string | undefined;
};

function ProjectStatus({ status }: Props) {
  const [state, setState] = useState({
    color: '',
    text: '',
  });

  const checkStatus = () => {
    switch (status) {
      case 'completed':
        return setState({ ...state, color: '#042588', text: 'Done' });
      default:
        return status;
    }
  };

  useEffect(() => {
    checkStatus();
  }, [status]);

  return (
    <div className={s.button} style={{ backgroundColor: state.color }}>
      {state.text}
    </div>
  );
}

export default ProjectStatus;
