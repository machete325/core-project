import api from '../api';

export const ProjectService = {
  getAllProjects: () => api('GET', [], '/projects'),
  getOneProject: (version: string) => api('GET', [], `/projects/${version}`),
};

// Project
// GET /projects
// GET /projects/<_version>
