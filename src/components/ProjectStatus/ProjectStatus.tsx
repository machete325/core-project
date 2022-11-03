import React, { useState, useEffect } from 'react';
import s from './ProjectStatus.module.scss';

type Props = {
  status: string | undefined;
};

function ProjectStatus({ status }: Props) {
  const [state, setState] = useState({
    color: '',
    text: '',
    textColor: '',
  });

  const checkStatus = () => {
    switch (status) {
      case 'completed':
        return setState({
          ...state,
          color: '#042588',
          text: 'Done',
          textColor: '#FFFFFF',
        });
      case 'running':
        return setState({
          ...state,
          color: '#2DADB5',
          text: 'Running',
          textColor: '#FFFFFF',
        });
      case 'que':
      case 'queued':
        return setState({
          ...state,
          color: '#87A4D1',
          text: 'In que',
          textColor: '#333333',
        });
      case 'stopped':
        return setState({
          ...state,
          color: '#FFD600',
          text: 'Stopped',
          textColor: '#333333',
        });
      case 'in_progress':
        return setState({
          ...state,
          color: '#1DF580',
          text: 'Running',
          textColor: '#333333',
        });
      case 'failed':
        return setState({
          ...state,
          color: '#F51D44',
          text: 'Failed',
          textColor: '#FFFFFF',
        });
      case 'created':
        return setState({
          ...state,
          color: '#005971',
          text: 'Created',
          textColor: '#333333',
        });
      case 'published':
        return setState({
          ...state,
          color: '#5237FB',
          text: 'Published',
          textColor: '#FFFFFF',
        });
      case 'publishing':
        return setState({
          ...state,
          color: '#9A86FD',
          text: 'Publishing',
          textColor: '#FFFFFF',
        });
      case 'unknown':
        return setState({
          ...state,
          color: '#4E4E52',
          text: 'Unknown',
          textColor: '#FFFFFF',
        });
      default:
        return status;
    }
  };

  useEffect(() => {
    checkStatus();
  }, [status]);

  return (
    <div
      className={s.button}
      style={{ backgroundColor: state.color, color: state.textColor }}
    >
      {state.text}
    </div>
  );
}

export default ProjectStatus;
