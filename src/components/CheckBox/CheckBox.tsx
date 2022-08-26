import React, { useState } from 'react';
import s from './CheckBox.module.scss';

type Props = {
  id: number;
  label: string;
  checked: boolean;
};

function CheckBox({ id, label, checked }: Props) {
  const [isChecked, setIsChecked] = useState(checked);
  console.log(isChecked);
  return (
    <div className={s.wrapper}>
      <label htmlFor="check">
        <input
          id={id.toString()}
          className={isChecked ? s.checked : ''}
          type="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default CheckBox;
