import api from '../../api';

export const OverviewService = {
  getProjectOverview: (
    version: string,
    display: boolean,
    signal: AbortSignal,
  ) => api(
    'GET',
    [],
    `/projects/${version}/overview${
      display ? '?display=true' : '?display=false'
    }`,
    {},
    signal,
  ),
};

// Project Overview
// GET /projects/<project_version>/overview
