import React, { useState, useEffect } from 'react';
import Loader from '../../../../../components/Loader/Loader';
import InputField from '../../../../../components/SearchField/InputField';
import { formatConfigurationSimilarYaml } from '../../../../../core/helpers/formatConfiguration';
import { ExperimentService } from '../../../../../core/services/projects/Experiment.service';
import s from './ModelConfiguration.module.scss';

interface Props {
  data: any;
  projectData: any;
}

function ModelConfiguration({ data, projectData }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [formattedData, setFormattedData] = useState<any>([]);
  const [configurationData, setConfigurationData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleGetConfiguration = async () => {
    try {
      setLoading(true);
      const configuration = await ExperimentService.getExperimentConfiguration(
        projectData.id,
        data.id,
      );
      const formatted = formatConfigurationSimilarYaml(
        configuration.data.items,
      );
      setFormattedData(formatted);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetConfiguration();
  }, [data.id]);

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
      {loading ? (
        <Loader />
      ) : (
        configurationData.map(({
          id, key, value, margin,
        }: any) => (
          <div
            className={s.config_line}
            style={{ marginLeft: margin }}
            key={id}
          >
            <div className={s.key}>{key}</div>
            <div className={s.value}>{value}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default ModelConfiguration;
