import React, { useState, useEffect } from 'react';
import { IProjectData } from '../../../../components/Modal/types';
import InputField from '../../../../components/SearchField/InputField';
import config from './conf.json';
import s from './Model.module.scss';
import formatConfiguration from './formatConfiguration';

const configuration = config.items;

interface Props {
  data: any;
  projectData: IProjectData;
}

function Model({ data, projectData }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [formattedData, setFormattedData] = useState<any>([]);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  console.log(data, projectData);

  useEffect(() => {
    setFormattedData(formatConfiguration(configuration));
  }, []);

  // const marking = (
  //   <div className={s.config_line} key={index}>
  //     <div className={s.key}>{key}</div>
  //     <div className={s.value}>{typeof value === 'boolean' ? `${value}` : value || '-'}</div>
  //   </div>
  // );
  return (
    <div>
      <div className={s.search}>
        <InputField
          type="text"
          name="search"
          placeholder="Search in project"
          value={searchValue}
          variant="search"
          width="100%"
          onChange={handleChange}
        />
      </div>
      {formattedData.map(({ id, key, value }: any) => (
        <div className={s.config_line} key={id}>
          <div className={s.key}>{key}</div>
          <div className={s.value}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export default Model;
