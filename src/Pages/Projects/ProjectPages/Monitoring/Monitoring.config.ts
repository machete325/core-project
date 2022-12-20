/* {
      name: name of experiment section,
      path: path to information on experiment data,
    }
  */

const monitoringConfig = {
  overview: {
    name: 'Overview',
    path: '.description',
  },
  dataDrift: {
    name: 'Data drift',
    path: '.description',
    iconTab: '.dataDriftStatus',
  },
  conceptDrift: {
    name: 'Concept drift',
    path: '.description',
    iconTab: '.conceptDriftStatus',
  },
  infrastructure: {
    name: 'Infrastucture',
    path: '.description',
  },
};

export default monitoringConfig;
