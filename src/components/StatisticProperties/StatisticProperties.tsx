/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import s from './StatisticProperties.module.scss';

function StatisticProperties({ data }: any) {
  const tbodyConf = Object.keys(data[Object.keys(data)[0]]);

  return (
    <div className={s.wrapper}>
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
          {tbodyConf.map((key) => (
            <tr>
              <th className={s.vertical_head} scope="row">
                {key}
              </th>
              {Object.keys(data).map((item) => (
                <td>{data[item][key] === 'NaN' ? '-' : data[item][key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatisticProperties;
