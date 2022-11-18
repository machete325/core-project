import api from '../../api';

export const ProjectService = {
  getAllProjects: () => api('GET', [], '/projects?page_size=5'),
  getOneProject: (version: string, signal?: AbortSignal) => api('GET', [], `/projects/${version}`, {}, signal),
  getProjectOverview: (version: string, display: boolean, signal: any) => api(
    'GET',
    [],
    `/projects/${version}/overview${
      display ? '?display=true' : '?display=false'
    }`,
    {},
    signal,
  ),
  uploadProjectPhoto: (version: string, data: any) => api('POST', data, `/projects/${version}/image`, {
    'Content-Type': 'multipart/form-data',
  }),
};

// Project
// GET /projects
// GET /projects/<_version>
