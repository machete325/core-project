import React, { useState, useEffect } from 'react';
import InputField from '../../../../components/SearchField/InputField';
import s from './Configuration.module.scss';
import formatConfiguration from '../../../../core/helpers/formatConfiguration';
import { ExperimentService } from '../../../../core/services/Experiment.service';

interface Props {
  data: any;
}

function Configuration({ data }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [formattedData, setFormattedData] = useState<any>([]);
  const [configurationData, setConfigurationData] = useState<any>([]);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleGetConfiguration = async () => {
    const configuration = await ExperimentService.getExperimentConfiguration(
      data.projectName,
      data.id,
    );
    const formatted = formatConfiguration(configuration.data.items);
    setFormattedData(formatted);
  };

  useEffect(() => {
    handleGetConfiguration();
  }, []);

  useEffect(() => {
    setConfigurationData(formattedData);
  }, [formattedData]);

  useEffect(() => {
    const filteredLinks = formattedData.filter(
      (item: any) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        item.key.toLowerCase().startsWith(searchValue.toLowerCase()),
      // eslint-disable-next-line function-paren-newline
    );
    setConfigurationData([...filteredLinks]);
  }, [searchValue]);

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
      {configurationData.map(({
        id, key, value, margin,
      }: any) => (
        <div className={s.config_line} style={{ marginLeft: margin }} key={id}>
          <div className={s.key}>{key}</div>
          <div className={s.value}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export default Configuration;
