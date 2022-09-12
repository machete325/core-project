import React from 'react';
import s from './GraphNavigation.module.scss';

function GraphNavigation() {
  return (
    <div className={s.wrapper}>
      <div className={s.map}>
        <img alt="MapTrifold" src="/images/icons/MapTrifold.svg" />
      </div>
      <div className={s.caret}>
        <img alt="CaretDown" src="/images/icons/CaretDown.svg" />
      </div>
    </div>
  );
}

export default GraphNavigation;
