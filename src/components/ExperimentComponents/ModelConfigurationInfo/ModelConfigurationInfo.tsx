import React, { useMemo } from 'react';
import { showDisplayData } from '../../../core/helpers/formatConfiguration';
import s from './ModelConfigurationInfo.module.scss';

type Props = {
  data: any;
  modalHandler: ((arg: string, key?: string) => void) | undefined;
  modalKey?: string;
  marginBottom: string;
};

function ModelConfigurationInfo({
  data,
  modalHandler,
  modalKey,
  marginBottom = '0px',
}: Props) {
  const items = useMemo(() => showDisplayData(data), [data]);
  return (
    <div className={s.wrapper}>
      {items.length !== 0 ? (
        items.map((item) => (
          <div
            role="presentation"
            key={item.id}
            onClick={
              modalHandler
                ? () => modalHandler('configuration', modalKey)
                : undefined
            }
            style={{ marginBottom }}
            className={`${s.container} ${modalHandler ? s.modal_call : null}`}
          >
            <div className={s.title}>{`${item.displayName}:`}</div>
            <div>{item.value}</div>
          </div>
        ))
      ) : (
        <div className={s.not_available}>Not available</div>
      )}
    </div>
  );
}

export default ModelConfigurationInfo;
