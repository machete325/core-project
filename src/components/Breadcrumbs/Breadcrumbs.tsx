import React, { MouseEventHandler } from 'react';
import s from './Breadcrumbs.module.scss';

type Props = {
  name: string | undefined;
  href: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  separator: string;
  active: boolean;
};

function Breadcrumbs({
  name, href, onClick, separator, active,
}: Props) {
  return (
    <div className={s.wrapper}>
      <div
        className={`${s.name} ${active && s.active}`}
        role="presentation"
        value={href}
        active={active.toString()}
        onClick={onClick}
      >
        {name}
      </div>
      <div className={s.separator}>{!active && <img alt="separator" src={separator} />}</div>
    </div>
  );
}

export default Breadcrumbs;
