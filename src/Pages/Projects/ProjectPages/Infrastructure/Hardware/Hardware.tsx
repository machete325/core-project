import React from 'react';
import ToBeImpelemented from '../../../../../components/ToBeImpelemented/ToBeImpelemented';
import s from './Hardware.module.scss';

interface Props {
  data: any;
}

function Hardware({ data }: Props) {
  console.log(data);
  return (
    <div className={s.wrapper}>
      <div className={s.data_container}>
        <div className={s.title}>CPU - simulated</div>
        <ToBeImpelemented
          element={(
            <img
              alt="CPU - simulated"
              src="/images/mock/infrastructure/chart-1.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>GPU - simulated</div>
        <ToBeImpelemented
          element={(
            <img
              alt="GPU - simulated"
              src="/images/mock/infrastructure/chart-1.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>RAM - simulated</div>
        <ToBeImpelemented
          element={(
            <img
              alt="RAM - simulated"
              src="/images/mock/infrastructure/chart-1.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Swap</div>
        <ToBeImpelemented
          element={
            <img alt="Swap" src="/images/mock/infrastructure/chart-2.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Disk I/O</div>
        <ToBeImpelemented
          element={
            <img alt="Disk I/O" src="/images/mock/infrastructure/chart-2.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Network I/O</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Network I/O"
              src="/images/mock/infrastructure/chart-2.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>Disk space</div>
        <ToBeImpelemented
          element={(
            <img
              alt="Disk space"
              src="/images/mock/infrastructure/chart-2.png"
            />
          )}
          color="primary"
          backgroundBlur
        />
      </div>
      <div className={s.data_container}>
        <div className={s.title}>GPU RAM</div>
        <ToBeImpelemented
          element={
            <img alt="GPU RAM" src="/images/mock/infrastructure/chart-2.png" />
          }
          color="primary"
          backgroundBlur
        />
      </div>
    </div>
  );
}

export default Hardware;
