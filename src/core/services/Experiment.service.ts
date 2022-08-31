import api from '../api';

const getBaseUrl = (projectVersion: string, version: string) => `/projects/${projectVersion}/experiments/${version}`;

export const ExperimentService = {
  getAllExperiments: () => api('GET', [], '/experiments'),
  getExperimentsMinimal: () => api('GET', [], '/experiments/minimal'),
  getProjectExperiments: (projectVersion: string) => api('GET', [], `/projects/${projectVersion}/experiments`),
  getProjectExperimentsMinimal: (projectVersion: string) => api('GET', [], `/projects/${projectVersion}/experiments/minimal`),
  getExperiment: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}`),
  getExperimentPlots: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/plots`),
  getExperimentPlotsWish: (projectVersion: string, version: string, _id: string | number) => api('GET', [], `${getBaseUrl(projectVersion, version)}/plots${_id}`),
  getExperimentMetrics: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/metrics`),
  getExperimentMetricsWish: (projectVersion: string, version: string, _id: string | number) => api('GET', [], `${getBaseUrl(projectVersion, version)}/metrics${_id}`),
  getExperimentConfiguration: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/configuration`),
  getExperimentDatasets: (projectVersion: string, version: string, prefix_value: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/datasets?prefix=${prefix_value}`),
  getExperimentCode: (projectVersion: string, version: string) => api('GET', [], `${getBaseUrl(projectVersion, version)}/code`),
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
