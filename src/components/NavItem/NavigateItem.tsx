import React from 'react';
import s from './NavigateItem.module.scss';

type Props = {
  text: string;
  active: boolean;
  imgSrc: string;
};

function NavigateItem({ text, active, imgSrc }: Props) {
  return (
    <div className={active ? s.item_active : s.item}>
      <img alt={text} width="30px" src={imgSrc} />
      <div className={s.text}>{text}</div>
    </div>
  );
}

export default NavigateItem;
