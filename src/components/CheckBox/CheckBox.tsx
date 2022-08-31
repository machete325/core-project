import React, { useEffect, useState } from 'react';
import s from './CheckBox.module.scss';

type Props = {
  id: number | string;
  checked: boolean;
  onChange?: (param: any) => void;
};

function CheckBox({ id, checked, onChange }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
    setIsChecked(event.target.checked);
  };

  return (
    <div className={s.checkbox}>
      <label>
        <input type="checkbox" checked={isChecked} value={id} onChange={handleChange} />
      </label>
    </div>
  );
}

export default CheckBox;
