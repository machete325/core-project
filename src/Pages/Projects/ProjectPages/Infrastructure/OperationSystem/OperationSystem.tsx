import React from 'react';
import s from './OperationSystem.module.scss';

interface Props {
  data: any;
}

function OperationSystem({ data }: Props) {
  console.log(data);
  return <div className={s.wrapper}>OperationSystem</div>;
}

export default OperationSystem;
