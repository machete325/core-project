import React from 'react';
import s from './GetMore.module.scss';

type Props = {
  getMoreHandler: () => void;
  disabled: boolean;
};

function GetMore({ getMoreHandler, disabled }: Props) {
  return (
    <div className={s.wrapper}>
      <button
        className={s.button}
        disabled={disabled}
        type="button"
        onClick={getMoreHandler}
      >
        Get More
      </button>
    </div>
  );
}

export default GetMore;
