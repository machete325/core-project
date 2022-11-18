import React from 'react';
import s from './NavigateProjectItem.module.scss';

type Props = {
  text: string;
  active: boolean;
  imgSrc: string;
  totalCount: number | undefined;
};

function NavigateProjectItem({
  text, active, imgSrc, totalCount,
}: Props) {
  return (
    <div className={active ? s.item_active : s.item}>
      <div className={s.navigate}>
        <div className={s.icon}>
          <img alt={text} width="30px" src={imgSrc} />
        </div>
        <div className={s.text}>{text}</div>
      </div>
      {totalCount && <div className={s.count}>{totalCount}</div>}
    </div>
  );
}

export default NavigateProjectItem;
