import React from 'react';
import OverviewTrend from './OverviewTrend/OverviewTrend';

interface Config {
  displayName: string;
  color: string;
  label: string;
  labelType: 'monitoring' | 'experiments' | 'trend' | 'datasets';
  inPercents: boolean;
}

const getOverviewLabel = (data: any, config: Config) => {
  const { labelType, label } = config;
  switch (labelType) {
    case 'experiments':
      return {
        text: `${data[label].y[0]} ${data[label].x[0]}`,
        color: '#1DF580',
      };
    case 'datasets':
      return { text: `${data[label]} versions`, color: '#A9ADBD' };
    case 'monitoring':
      return { text: `${data[label]} drift`, color: '#F51D44' };
    case 'trend':
      return { text: <OverviewTrend trend={data[label]} />, color: '#F51D44' };
    default:
      return null;
  }
};

export default getOverviewLabel;
