import React from 'react';
import { defineCurrency } from '../../core/helpers/textMethods';
import { IMachine } from '../../types/project/infrastructure';
import ProjectStatus from '../ProjectStatus/ProjectStatus';
import StatusTag from '../StatusTag/StatusTag';
import s from './MachineDetails.module.scss';

type Props = {
  data: IMachine | undefined;
  orientation: 'horizontal' | 'vertical';
};

function MachineDetails({ data, orientation }: Props) {
  if (orientation === 'horizontal') {
    return (
      <div className={s.wrapper}>
        <div className={s.title}>Machine details</div>
        {data && (
          <div className={s.content_container}>
            <div className={s.content}>
              <img src="/images/machine.png" alt="machine" />
              <div
                className={s.category_container}
                style={{
                  paddingRight: '32px',
                  borderRight: '1px solid #6b6e7b',
                  marginLeft: '16px',
                }}
              >
                <div>
                  Name:
                  <span className={s.category_value}>{data.name}</span>
                </div>
                <div>
                  Type:
                  <span className={s.category_value}>cloud</span>
                </div>
                <div>
                  Cloud provider:
                  <span className={s.category_value}>{data.provider}</span>
                </div>
                <div>
                  Spec:
                  <span className={s.category_value}>{data.spec}</span>
                </div>
              </div>
              <div
                className={s.category_container}
                style={{
                  marginLeft: '32px',
                }}
              >
                <div>
                  Ongoing cost:
                  <span className={s.category_value}>
                    {`${defineCurrency(data.currency) + data.price} / ${
                      data.displayPriceRate
                    }`}
                  </span>
                </div>
                <div>
                  Accumulated costs:
                  <span className={s.category_value}>
                    {`${defineCurrency(data.currency) + data.accumulatedCost}`}
                  </span>
                </div>
                <div>
                  Experiments running:
                  <span className={s.category_value}>
                    {data.experimentsRunning}
                  </span>
                </div>
                <div style={{ display: 'flex' }}>
                  Average cost:
                  <span className={s.category_value}>
                    <StatusTag
                      usedValue={data.averageCost}
                      totalValue={data.accumulatedCost}
                      currency={data.currency}
                    />
                  </span>
                </div>
              </div>
            </div>
            <ProjectStatus status={data.status} />
          </div>
        )}
      </div>
    );
  }
  if (orientation === 'vertical') {
    return (
      <div className={s.wrapper_vertical}>
        <div className={s.image_vertical}>
          <img src="/images/machine.png" alt="machine" />
        </div>
        {data && (
          <div className={s.content_container_vertical}>
            <ProjectStatus status={data.status} />
            <div className={s.content_vertical}>
              <div className={s.category_container_vertical}>
                <div className={s.category_title_vertical}>
                  Name:
                  <span className={s.category_value_vertical}>{data.name}</span>
                </div>
                <div className={s.category_title_vertical}>
                  Type:
                  <span className={s.category_value_vertical}>cloud</span>
                </div>
                <div className={s.category_title_vertical}>
                  Cloud provider:
                  <span className={s.category_value_vertical}>
                    {data.provider}
                  </span>
                </div>
                <div className={s.category_title_vertical}>
                  Spec:
                  <span className={s.category_value_vertical}>{data.spec}</span>
                </div>

                <div className={s.category_title_vertical}>
                  Ongoing cost:
                  <span className={s.category_value_vertical}>
                    {`${defineCurrency(data.currency) + data.price} / ${
                      data.displayPriceRate
                    }`}
                  </span>
                </div>
                <div className={s.category_title_vertical}>
                  Accumulated costs:
                  <span className={s.category_value_vertical}>
                    {`${defineCurrency(data.currency) + data.accumulatedCost}`}
                  </span>
                </div>
                <div className={s.category_title_vertical}>
                  Experiments running:
                  <span className={s.category_value_vertical}>
                    {data.experimentsRunning}
                  </span>
                </div>
                <div
                  className={s.category_title_vertical}
                  style={{ display: 'flex' }}
                >
                  Average cost:
                  <span className={s.category_value_vertical}>
                    <StatusTag
                      usedValue={data.averageCost}
                      totalValue={data.accumulatedCost}
                      currency={data.currency}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
}

export default MachineDetails;
