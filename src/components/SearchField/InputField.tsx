import React, { ChangeEventHandler } from 'react';
import s from './InputField.module.scss';

type Props = {
  value: string;
  label?: string;
  name: string;
  placeholder: string;
  type: string;
  variant: 'search' | 'regular';
  onChange: ChangeEventHandler<HTMLInputElement>;
  width?: string;
  height?: string;
};

function InputField({
  value,
  label,
  name,
  placeholder,
  type,
  variant,
  onChange,
  width = '240px',
  height = '48px',
}: Props) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className={s.input_container}>
        <input
          id={name}
          type={type}
          value={value}
          name={name}
          className={variant === 'search' ? `${s.input} ${s.icon}` : s.input}
          placeholder={placeholder}
          style={{ width, height }}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputField;
