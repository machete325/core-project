import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { getTabContent } from '../../core/helpers/getTabContent';
import { IExperiment } from '../../types/project/experiments';
import { IDataset } from '../../types/project/datasets';
import { IProject } from '../../types/project/project';
import MonitoringStatus from '../MonitoringComponents/MonitoringStatus/MonitoringStatus';
import { IMonitoring } from '../../types/project/monitoring';
import { convertToString } from '../../core/helpers/objectMethods';
import s from './ProjectTabs.module.scss';
import { IInfrastructure } from '../../types/project/infrastructure';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import OpenButton from '../OpenButton/OpenButton';
import MonitoringLastUpdate from '../MonitoringComponents/MonitoringLastUpdate/MonitoringLastUpdate';
import ProjectVersion from '../ProjectVersion/ProjectVersion';
import ProjectStatus from '../ProjectStatus/ProjectStatus';

interface IConfig {
  name: string;
  path: string;
  iconTab?: string;
}

interface Props {
  config: { [key: string]: IConfig };
  defaultTab: string | undefined;
  data:
  | IExperiment[]
  | IDataset[]
  | IMonitoring[]
  | IInfrastructure[]
  | undefined;
  projectData: IProject;
  page: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabProps {
  label: string;
  icon?: any;
  iconPosition?: any;
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
      {value === index && <div className={s.tab_children}>{children}</div>}
    </div>
  );
}

function ProjectCompareTabs({
  config,
  defaultTab,
  data,
  projectData,
  page,
}: Props) {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            height: page === 'monitoring' ? '60px' : '',
          },
        },
      },
    },
  });

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
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {Object.keys(config).map((tab) => (
              <AntTab
                iconPosition="end"
                icon={
                  config[tab].iconTab && (
                    <MonitoringStatus
                      status={convertToString(data, config[tab].iconTab)}
                      variant="modal"
                    />
                  )
                }
                key={tab}
                label={config[tab].name}
              />
            ))}
          </AntTabs>
        </Box>
        {Object.keys(config).map((tab, index) => (
          <TabPanel key={tab} value={value} index={index}>
            {data?.map((item) => (
              <div key={item.id} className={s.content_container}>
                <div className={s.title_container}>
                  <ProjectTitle
                    type="experiment"
                    data={projectData}
                    pageData={item}
                    size="small"
                  />
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {item && 'status' in item && page === 'experiments' && (
                      <ProjectStatus status={item?.status} />
                    )}
                    {item && 'version' in item && page === 'datasets' && (
                      <ProjectVersion version={item?.version} />
                    )}
                    {item && 'edited' in item && page === 'monitoring' && (
                      <MonitoringLastUpdate date={item.edited} />
                    )}
                    <OpenButton />
                  </div>
                </div>
                <div className={s.scroll_container}>
                  {getTabContent(
                    { type: tab, path: config[tab].path, page },
                    item,
                    projectData,
                  )}
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
}

export default ProjectCompareTabs;
