import api from '../../api';
import { getAdditionalParams } from '../../helpers/apiHelpers';

export const MonitoringService = {
  getProjectMonitoring: (
    projectVersion: string,
    display?: boolean,
    page?: number,
    size?: number,
    signal?: AbortSignal,
    cancelToken?: any,
  ) => api(
    'GET',
    [],
    `/projects/${projectVersion}/monitoring${getAdditionalParams(
      display,
      page,
      size,
    )}`,
    {},
    signal,
    cancelToken,
  ),
  getMonitoring: (version: string, display?: boolean) => api('GET', [], `/monitoring/${version}${getAdditionalParams(display)}`, {}),
};

// Project Monitoring
// GET /projects/<project_version>/monitoring
// GET /projects/<project_version>/monitoring/<monitoring_version>
