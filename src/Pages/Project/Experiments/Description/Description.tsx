import React from 'react';
import s from './Description.module.scss';

interface Props {
  data: string;
}

function Description({ data }: Props) {
  console.log(data);
  return <div className={s.wrapper}>Descrotpiom</div>;
}

export default Description;
