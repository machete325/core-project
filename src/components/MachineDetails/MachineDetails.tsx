import React from 'react';
import s from './MachineDetails.module.scss';

function MachineDetails() {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Machine details</div>
      <div className={s.content}>
        <div>
          <img src="/images/machine.png" alt="machine" />
        </div>
      </div>
    </div>
  );
}

export default MachineDetails;
