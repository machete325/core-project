import React from 'react';
import s from './OpenButton.module.scss';

function OpenButton() {
  return (
    <div className={s.wrapper}>
      <img
        alt="ArrowSquareUpRight"
        src="/images/icons/ArrowSquareUpRight.svg"
      />
      <div className={s.text}>Open</div>
    </div>
  );
}

export default OpenButton;
