import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface Props {
  config: { [key: string]: any };
  defaultTab: string | undefined;
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

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
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
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function ProjectTabs({ config, defaultTab }: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const idx = Object.keys(config).findIndex((item) => item === defaultTab);
    if (idx >= 0) {
      setValue(idx);
    }
  }, [defaultTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {Object.keys(config).map((tab) => (
            <AntTab key={tab} label={config[tab].name} />
          ))}
        </AntTabs>
      </Box>
      {Object.keys(config).map((tab, index) => (
        <TabPanel key={tab} value={value} index={index}>
          {config[tab].name}
        </TabPanel>
      ))}
    </Box>
  );
}

export default ProjectTabs;
