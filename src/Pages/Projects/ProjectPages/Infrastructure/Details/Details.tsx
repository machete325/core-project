import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import s from './Details.module.scss';

interface Props {
  data: any;
}

function Details({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      <div className={s.data_container}>
        <div className={s.title}>Machine details</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Machine details"
              src="/images/mock/infrastructure/machine-details.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Accumulated costs</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Accumulated costs"
              src="/images/mock/infrastructure/accumulated-costs.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Hours used and Costs - Cloud: General_C1</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Hours used and Costs - Cloud: General_C1"
              src="/images/mock/infrastructure/hours-used-and-costs.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
    </div>
  );
}

export default Details;
