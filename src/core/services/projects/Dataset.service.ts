import api from '../../api';
import { getAdditionalParams } from '../../helpers/apiHelpers';

export const DatasetService = {
  getProjectDatasets: (
    projectVersion: string,
    display?: boolean,
    page?: number,
    size?: number,
    signal?: AbortSignal,
  ) => api(
    'GET',
    [],
    `/projects/${projectVersion}/data${getAdditionalParams(
      display,
      page,
      size,
    )}`,
    {},
    signal,
  ),
};

// Project Datasets
// GET /projects/<project_version>/data
