import React from 'react';
import s from './MetricsInfo.module.scss';
import StatusTag from '../../StatusTag/StatusTag';

export interface IMetric {
  id: string;
  name: string;
  displayName: string;
  display: boolean;
  value: number;
  threshold: number;
  aggregationOperation: string;
}

type Props = {
  data: { [key: string]: IMetric };
  limiter: number;
  modalHandler?: (arg: string, key?: string) => void;
  modalKey?: string;
};

export default function MetricsInfo({
  data,
  limiter,
  modalHandler,
  modalKey,
}: Props) {
  if (Object.keys(data).length === 0) {
    return (
      <table className={s.wrapper}>
        <td className={s.not_available}>Not available</td>
      </table>
    );
  }

  return (
    <table className={s.wrapper}>
      {Object.values(data).map((metric: IMetric, index) => {
        if (index <= limiter - 1) {
          return (
            <tbody key={metric.id}>
              <tr
                className={`${modalHandler ? s.modal_call : null}`}
                onClick={
                  modalHandler
                    ? () => modalHandler('metrics', modalKey)
                    : undefined
                }
              >
                <td className={s.metric_title}>{metric.displayName}</td>
                <td>
                  <StatusTag
                    usedValue={metric.value}
                    totalValue={metric.threshold}
                  />
                </td>
              </tr>
            </tbody>
          );
        }
        return null;
      })}
    </table>
  );
}
