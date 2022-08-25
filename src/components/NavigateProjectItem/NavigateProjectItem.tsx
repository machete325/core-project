import React from 'react';
import s from './NavigateProjectItem.module.scss';

type Props = {
  text: string;
  active: boolean;
  imgSrc: string;
};

function NavigateProjectItem({ text, active, imgSrc }: Props) {
  return (
    <div className={active ? s.item_active : s.item}>
      <div className={s.icon}>
        <img alt={text} width="30px" src={imgSrc} />
      </div>
      <div className={s.text}>{text}</div>
    </div>
  );
}

export default NavigateProjectItem;
