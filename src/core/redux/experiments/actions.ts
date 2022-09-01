import { ExperimentService } from '../../services/Experiment.service';
import { AppThunk, AppDispatch } from '../store';
import { experimentSlice } from './reducer';

const { setExperiments, startLoading, setCheckExperiments } = experimentSlice.actions;
const { getAllExperiments } = ExperimentService;

const mockExperimentsData = [
  {
    version: '9a0d8999eb3c4f3f95d60e4fc4e5afdd',
    name: 'Experiment_v2.87',
    dataset: {
      version: 'v2.2.0',
      prefix: 'odyssey_sales_forecast',
    },
    project_version: 'a39de25ed7bc491b99ca8b553c3735ee',
    description: 'A more significant number of boosting trees.',
    target: 'Enter target',
    status: 'completed',
    is_updatable: false,
    software: 'Linux - Python 3.8.13',
    hardware: 'NVIDIA GeForce RTX 3060, NVIDIA GeForce RTX 2070 SUPER 12GB, 8GB - 31.3GB RAM',
    hostname: 'iusztin-MS-7C91',
    url: 'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/',
    url_artifacts:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/artifacts',
    url_codebase: 'git@github.com:Coreai-org/time-series-forecast.git',
    url_configuration:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/hyper-params/configuration/OmegaConf',
    url_debug_samples:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/info-output/debugImages',
    url_execution:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/execution',
    url_last_model: '',
    url_metrics:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/info-output/metrics/scalar',
    url_project: 'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/',
    url_report:
      'http://3.66.243.81:8081/SalesPredictionKaggle/Experiment_v2.87.9a0d8999eb3c4f3f95d60e4fc4e5afd6/metrics/Experiment%20Report/Experiment%20Report/Experiment%20Report_Experiment%20Report_00000000.html',
    requirements: {
      software: '# Python 3.8.13 (default, Mar 28 2022, 11:38:47)  [GCC 7.5.0]',
      pip: [
        'boto3 == 1.21.21',
        'clearml == 1.4.0',
        'corecontrol @ git+ssh://git@github.com/Coreai-org/corecontrol.git@03cc457cc6c8efe594fe5bedf384694a3b643a75#egg=corecontrol',
        'holidays == 0.13',
        'hydra_core == 1.1.2',
        'lightgbm == 3.3.2',
        'matplotlib == 3.5.1',
        'numpy == 1.22.4',
        'omegaconf == 2.1.2',
        'pandas == 1.4.2',
        'pyinstrument == 4.1.1',
        'scikit_learn == 1.0.2',
        'seaborn == 0.11.2',
        'statsmodels == 0.13.2',
        'tqdm == 4.64.0',
        'xgboost == 1.6.0',
      ],
      conda: [],
    },
    metrics: {
      'Test/R2': 0.5183699727058411,
      'Test/RMSE': 1.1389299631118774,
      'Test/RRSE': 0.6940000057220459,
    },
    configuration: {
      num_boost_round: 3000,
      learning_rate: 0.005,
      num_leaves: 127,
    },
    infrastructure: {
      training_time: 5220,
      average_cost: 200,
      total_budget: 500,
      currency: 'USD',
      used_machines: 2,
      total_machines: 3,
    },
    commit: {
      last_commit: {
        description: 'This is a commit description',
      },
    },
  },
  {
    version: '9a0d8999eb3c4f3f95d60e4fc4e5afd6',
    name: 'Experiment_v2.87',
    dataset: {
      version: 'v2.2.0',
      prefix: 'odyssey_sales_forecast',
    },
    project_version: 'a39de25ed7bc491b99ca8b553c3735ee',
    description: 'A more significant number of boosting trees.',
    target: 'Enter target',
    status: 'completed',
    is_updatable: false,
    software: 'Linux - Python 3.8.13',
    hardware: 'NVIDIA GeForce RTX 3060, NVIDIA GeForce RTX 2070 SUPER 12GB, 8GB - 31.3GB RAM',
    hostname: 'iusztin-MS-7C91',
    url: 'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/',
    url_artifacts:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/artifacts',
    url_codebase: 'git@github.com:Coreai-org/time-series-forecast.git',
    url_configuration:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/hyper-params/configuration/OmegaConf',
    url_debug_samples:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/info-output/debugImages',
    url_execution:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/execution',
    url_last_model: '',
    url_metrics:
      'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/experiments/9a0d8999eb3c4f3f95d60e4fc4e5afd6/info-output/metrics/scalar',
    url_project: 'http://3.66.243.81:8080/projects/e70eaa1d83764da294755fb800c383b6/',
    url_report:
      'http://3.66.243.81:8081/SalesPredictionKaggle/Experiment_v2.87.9a0d8999eb3c4f3f95d60e4fc4e5afd6/metrics/Experiment%20Report/Experiment%20Report/Experiment%20Report_Experiment%20Report_00000000.html',
    requirements: {
      software: '# Python 3.8.13 (default, Mar 28 2022, 11:38:47)  [GCC 7.5.0]',
      pip: [
        'boto3 == 1.21.21',
        'clearml == 1.4.0',
        'corecontrol @ git+ssh://git@github.com/Coreai-org/corecontrol.git@03cc457cc6c8efe594fe5bedf384694a3b643a75#egg=corecontrol',
        'holidays == 0.13',
        'hydra_core == 1.1.2',
        'lightgbm == 3.3.2',
        'matplotlib == 3.5.1',
        'numpy == 1.22.4',
        'omegaconf == 2.1.2',
        'pandas == 1.4.2',
        'pyinstrument == 4.1.1',
        'scikit_learn == 1.0.2',
        'seaborn == 0.11.2',
        'statsmodels == 0.13.2',
        'tqdm == 4.64.0',
        'xgboost == 1.6.0',
      ],
      conda: [],
    },
    metrics: {
      'Test/R2': 0.5183699727058411,
      'Test/RMSE': 1.1389299631118774,
      'Test/RRSE': 0.6940000057220459,
    },
    configuration: {
      num_boost_round: 3000,
      learning_rate: 0.005,
      num_leaves: 127,
    },
    infrastructure: {
      training_time: 5220,
      average_cost: 200,
      total_budget: 500,
      currency: 'USD',
      used_machines: 2,
      total_machines: 3,
    },
    commit: {
      last_commit: {
        description: 'This is a commit description',
      },
    },
  },
];

export const fetchExperiments = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading);
    const responce = await getAllExperiments();
    console.log(responce);
    dispatch(setExperiments(mockExperimentsData));
  } catch (e) {
    console.log(e);
  }
};

export const checkExperiments = (checked: boolean) => (dispatch: AppDispatch) => {
  dispatch(setCheckExperiments(checked));
};
