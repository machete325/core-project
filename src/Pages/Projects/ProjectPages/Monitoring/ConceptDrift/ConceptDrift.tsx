import React from 'react';
import { IMonitoring } from '../../../../../types/project/Monitoring';
import s from './ConceptDrift.module.scss';

interface Props {
  data: IMonitoring;
}

function ConceptDrift({ data }: Props) {
  console.log(data);
  return <div className={s.wrapper}>ConceptDrift</div>;
}

export default ConceptDrift;
