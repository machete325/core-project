/* {
      name: name of experiment section,
      path: path to information on experiment data,
    }
  */

const experimentConfig = {
  description: {
    name: 'Description',
    path: '.description',
  },
  target: {
    name: 'Target',
    path: '.target',
  },
  data: {
    name: 'Data',
    path: '.data',
  },
  metrics: {
    name: 'Main Metrics',
    path: '.metrics.items',
  },
  configuration: {
    name: 'Model configuration',
    path: '.configuration.items',
  },
  infrastructure: {
    name: 'Infrastructure',
    path: '.infrastructure',
  },
  last_commit: {
    name: 'Commit Description',
    path: '.code.commitMessage',
  },
};

export default experimentConfig;
