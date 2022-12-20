/* {
      name: name of infrastructure section,
      path: path to information on infrastructure data,
    }
  */

const infrastructureConfig = {
  details_and_costs: {
    name: 'Overview',
    path: '.description',
  },
  hardware: {
    name: 'Data drift',
    path: '.description',
  },
  operating_system: {
    name: 'Concept drift',
    path: '.description',
  },
};

export default infrastructureConfig;
