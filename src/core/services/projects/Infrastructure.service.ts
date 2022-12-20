import api from '../../api';
import { getAdditionalParams } from '../../helpers/apiHelpers';

export const InfrastructureService = {
  getProjectInfrastructure: (
    projectVersion: string,
    display?: boolean,
    page?: number,
    size?: number,
    signal?: AbortSignal,
    cancelToken?: any,
  ) => api(
    'GET',
    [],
    `/projects/${projectVersion}/infrastructure${getAdditionalParams(
      display,
      page,
      size,
    )}`,
    {},
    signal,
    cancelToken,
  ),
  getInfrastructure: (version: string, display?: boolean) => api(
    'GET',
    [],
    `/infrastructure/${version}${getAdditionalParams(display)}`,
    {},
  ),
};

// Project Infrastructure
// GET /projects/<project_version>/infrastructure
// GET /projects/<project_version>/infrastructure/<infrastructure_version>
