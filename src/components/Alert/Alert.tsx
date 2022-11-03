import React, { useState, useEffect } from 'react';
import s from './Alert.module.scss';

type Props = {
  type: 'urgent' | 'mild' | 'standart';
};

function Alert({ type }: Props) {
  const [state, setState] = useState({ color: '', text: '' });

  const definitionType = (alertType: string) => {
    switch (alertType) {
      case 'urgent':
        return setState({ ...state, color: '#f51d44', text: 'Urgent' });
      case 'mild':
        return setState({ ...state, color: '#FFD600', text: 'Mild' });
      case 'standart':
        return setState({ ...state, color: '#B7CFEF', text: 'Standard' });
      default:
        return null;
    }
  };

  useEffect(() => {
    definitionType(type);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.title_container}>
        <div>Drift Alert!</div>
        <div style={{ backgroundColor: state.color }} className={s.status}>
          {state.text}
        </div>
      </div>
      <div className={s.content}>
        <div>My model 1.3</div>
        <div>Concept drift</div>
        <div>12.04.2022 at 16:41</div>
      </div>
    </div>
  );
}

export default Alert;
