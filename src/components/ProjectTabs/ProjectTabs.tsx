import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import s from './ProjectTabs.module.scss';
import { getTabContent } from '../../core/helpers/getTabContent';
import { IExperiment } from '../../core/redux/projects/experiments/types';
import { IProjectData } from '../Modal/types';
import { IDataset } from '../../core/redux/projects/datasets/types';

interface IConfig {
  name: string;
  path: string;
}

interface Props {
  config: { [key: string]: IConfig };
  defaultTab: string | undefined;
  data: IExperiment | IDataset | undefined;
  projectData: IProjectData;
  page: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabProps {
  label: string;
}

// Styled Mui components

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #6B6E7B;',
  '& .MuiTabs-indicator': {
    backgroundColor: '#ffffff',
    height: '3px',
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  color: '#A9ADBD',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '22px',
  '&.Mui-selected': {
    color: '#FFFFFF',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      className={s.tab_panel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function ProjectTabs({
  config, defaultTab, data, projectData, page,
}: Props) {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState(defaultTab);

  useEffect(() => {
    const idx = Object.keys(config).findIndex((item) => item === defaultTab);
    if (idx >= 0) {
      setValue(idx);
    }
  }, [defaultTab]);

  useEffect(() => {
    const idx = Object.keys(config).findIndex((item) => item === currentTab);
    if (idx >= 0) {
      setValue(idx);
    }
  }, [currentTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const tab = Object.keys(config)[newValue];
    setCurrentTab(tab);
  };

  useEffect(() => {
    const idx = Object.keys(config).findIndex((item) => item === defaultTab);
    if (idx >= 0 && value !== idx) {
      setValue(idx);
    }
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {Object.keys(config).map((tab) => (
            <AntTab key={tab} label={config[tab].name} />
          ))}
        </AntTabs>
      </Box>
      {Object.keys(config).map((tab, index) => (
        <TabPanel key={tab} value={value} index={index}>
          {getTabContent(
            { type: tab, path: config[tab].path, page },
            data,
            projectData,
          )}
        </TabPanel>
      ))}
    </Box>
  );
}

export default ProjectTabs;
