import api from '../../api';
import { getAdditionalParams } from '../../helpers/apiHelpers';

export const MonitoringService = {
  getProjectMonitoring: (
    projectVersion: string,
    display?: boolean,
    page?: number,
    size?: number,
    signal?: AbortSignal,
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
  ),
  getMonitoring: (dataVersion: string, display?: boolean) => api(
    'GET',
    [],
    `/monitoring/${dataVersion}${getAdditionalParams(display)}`,
    {},
  ),
};

// Project Datasets
// GET /projects/<project_version>/monitoring
// GET /projects/<project_version>/monitoring/<monitoring_version>
