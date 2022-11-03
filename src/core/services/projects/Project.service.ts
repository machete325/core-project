import api from '../../api';

export const ProjectService = {
  getAllProjects: () => api('GET', [], '/projects?page_size=7'),
  getOneProject: (version: string) => api('GET', [], `/projects/${version}`),
  getProjectOverview: (version: string, display: boolean, signal: any) => api(
    'GET',
    [],
    `/projects/${version}/overview${
      display ? '?display=true' : '?display=false'
    }`,
    signal,
  ),
};

// Project
// GET /projects
// GET /projects/<_version>
