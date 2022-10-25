import api from '../../api';

const getBaseUrl = (projectVersion: string, version: string) => `/projects/${projectVersion}/experiments/${version}`;
const getAdditionalParams = (
  display?: boolean,
  page?: number,
  size?: number,
) => {
  let url = display ? '?display=true' : '?display=false';
  if (page) {
    url += `&page=${page}`;
  }
  if (size) {
    url += `&size=${size}`;
  }
  return url;
};

export const ExperimentService = {
  getAllExperiments: () => api('GET', [], '/experiments'),
  getExperimentsMinimal: () => api('GET', [], '/experiments/minimal'),
  getProjectExperiments: (
    projectVersion: string,
    display?: boolean,
    page?: number,
    size?: number,
  ) => api(
    'GET',
    [],
    `/projects/${projectVersion}/experiments${getAdditionalParams(
      display,
      page,
      size,
    )}`,
  ),
  getProjectExperimentsMinimal: (projectVersion: string) => api('GET', [], `/projects/${projectVersion}/experiments/minimal`),
  getExperiment: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}`),
  getExperimentPlots: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/plots`),
  getExperimentPlotsWish: (
    projectVersion: string,
    version: string,
    _id: string | number,
  ) => api('GET', [], `${getBaseUrl(projectVersion, version)}/plots${_id}`),
  getExperimentMetrics: (
    projectVersion: string,
    version: string,
    display: boolean,
  ) => api(
    'GET',
    [],
    `${getBaseUrl(projectVersion, version)}/metrics${
      display ? '' : '?display=false'
    }`,
  ),
  getExperimentMetricsWish: (
    projectVersion: string,
    version: string,
    _id: string | number,
  ) => api('GET', [], `${getBaseUrl(projectVersion, version)}/metrics${_id}`),
  getExperimentConfiguration: (
    projectVersion: string,
    version: string,
    display?: boolean,
  ) => api(
    'GET',
    [],
    `${getBaseUrl(projectVersion, version)}/configuration${
      display ? '' : '?display=false'
    }`,
  ),
  getExperimentDatasets: (
    projectVersion: string,
    version: string,
    display: boolean,
  ) => api(
    'GET',
    [],
    `${getBaseUrl(projectVersion, version)}/data${
      display ? '?display=true' : '?display=false'
    }`,
  ),
  getExperimentCode: (
    projectVersion: string,
    version: string,
    display: boolean,
  ) => api(
    'GET',
    [],
    `${getBaseUrl(projectVersion, version)}/code${
      display ? '' : '?display=false'
    }`,
  ),
  getExperimentModels: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/models`),
};

// Experiment
// GET /experiments

// GET /experiments/minimal

// GET /projects/<project_version>/experiments

// GET /projects/<project_version>/experiments/minimal

// GET /projects/<project_version>/experiments/<_version>

// GET /projects/<project_version>/experiments/<_version>/plots

// GET /projects/<project_version>/experiments/<_version>/plots/<_id> (Wishlist)

// GET /projects/<project_version>/experiments/<_version>/metrics

// GET /projects/<project_version>/experiments/<_version>/metrics/<_id> (Wishlist)

// GET /projects/<project_version>/experiments/<_version>/configuration

// GET /projects/<project_version>/experiments/<_version>/datasets?prefix=<prefix_value>

// GET /projects/<project_version>/experiments/<_version>/code

// GET /projects/<project_version>/experiments/<_version>/models
