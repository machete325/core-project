import React, { CSSProperties, MouseEventHandler } from 'react';
import s from './Button.module.scss';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: CSSProperties | undefined;
  children: React.ReactNode;
};

function Button({
  onClick, disabled, style, children,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${disabled ? s.button_disabled : s.button}`}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
