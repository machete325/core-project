import React, { useMemo } from 'react';
import { showDisplayData } from '../../../core/helpers/formatConfiguration';
import s from './ModelConfigurationInfo.module.scss';

function ModelConfigurationInfo({ data, modalHandler }: any) {
  const items = useMemo(() => showDisplayData(data), [data]);
  return (
    <div className={s.wrapper}>
      {items.map((item) => (
        <div
          role="presentation"
          key={item.id}
          onClick={
            modalHandler ? () => modalHandler('configuration') : undefined
          }
          className={`${s.container} ${modalHandler ? s.modal_call : null}`}
        >
          <div className={s.title}>{`${item.displayName}:`}</div>
          <div>{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export default ModelConfigurationInfo;
