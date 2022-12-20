import api from '../../api';
import { getAdditionalParams } from '../../helpers/apiHelpers';

export const DatasetService = {
  getProjectDatasets: (
    projectVersion: string,
    display?: boolean,
    page?: number,
    size?: number,
    signal?: AbortSignal,
    cancelToken?: any,
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
    cancelToken,
  ),
  getDataset: (version: string, display?: boolean) => api('GET', [], `/data/${version}${getAdditionalParams(display)}`, {}),
};

// Project Datasets
// GET /projects/<project_version>/data
