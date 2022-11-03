import api from '../../api';

export const OverviewService = {
  getProjectOverview: (version: string, display: boolean) => api(
    'GET',
    [],
    `/projects/${version}/overview${
      display ? '?display=true' : '?display=false'
    }`,
  ),
};

// Project Overview
// GET /projects/<project_version>/overview
