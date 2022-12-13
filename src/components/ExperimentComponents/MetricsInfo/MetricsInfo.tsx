import React from 'react';
import s from './MetricsInfo.module.scss';
import StatusTag from '../../StatusTag/StatusTag';
import { IMetric } from '../../../types/project/Experiments';

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
        <tbody>
          <tr>
            <td className={s.not_available}>Not available</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table className={s.wrapper}>
      <tbody>
        {Object.values(data).map((metric: IMetric, index) => {
          if (index <= limiter - 1) {
            return (
              <tr
                key={metric.id}
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
                    type="metrics"
                    usedValue={metric.value}
                    totalValue={metric.threshold}
                  />
                </td>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}
