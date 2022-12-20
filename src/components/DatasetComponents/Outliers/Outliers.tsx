import React from 'react';
import s from './Outliers.module.scss';

type Props = {
  data: { [key: string]: number[] | string[] };
  description?: string | null;
};

function Outliers({ data, description }: Props) {
  return (
    <div className={s.wrapper}>
      {description !== null && (
        <div className={s.description}>{description || 'Outliers'}</div>
      )}
      {data
        && Object.entries(data).map((item) => (
          <div key={item[0]} className={s.container}>
            <div className={s.title}>{`'${item[0]}':`}</div>
            <div className={s.value}>{`${JSON.stringify(item[1])}`}</div>
          </div>
        ))}
    </div>
  );
}

export default Outliers;
