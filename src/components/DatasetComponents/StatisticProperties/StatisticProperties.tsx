/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import s from './StatisticProperties.module.scss';

interface Props {
  data: any;
  title?: string;
}

function StatisticProperties({ data, title }: Props) {
  const tbodyConf = data && Object.keys(data[Object.keys(data)[0]]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{title || 'Statistic Properties'}</div>
      {data && (
        <div className={s.table_container}>
          <table className={s.table}>
            <thead>
              <tr>
                <th scope="col" />
                {Object.keys(data).map((item) => (
                  <th className={s.horizontal_head} key={item} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {tbodyConf.map((key: string) => (
                <tr key={key}>
                  <th className={s.vertical_head} scope="row">
                    {key}
                  </th>
                  {Object.keys(data).map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <td key={`${key}-${index}`}>
                      {data[item][key] === 'NaN' || data[item][key] === null
                        ? '-'
                        : data[item][key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StatisticProperties;
