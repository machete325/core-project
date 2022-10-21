import React from 'react';
import s from './GeneralInfo.module.scss';

function GeneralInfo({ tagsData, displayName, version }: any) {
  return (
    <div className={s.config_line}>
      <div className={s.config_line_name}>
        <div>{displayName}</div>
        <div>{version}</div>
      </div>
      <div className={s.general_info}>
        {tagsData.map((tag: any) => (
          <div key={tag.displayName} className={s.status_tag}>
            <div className={s.tag_value}>{tag.value}</div>
            <div className={s.tag_name}>{tag.displayName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralInfo;
