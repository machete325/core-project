export interface IExperimentData {
  version: string;
  name: string;
  dataset: {
    version: string;
    prefix: string;
  };
  project_version: string;
  description: string;
  target: string;
  status: string;
  is_updatable: boolean;
  software: string;
  hardware: string;
  hostname: string;
  url: string;
  url_artifacts: string;
  url_codebase: string;
  url_configuration: string;
  url_debug_samples: string;
  url_execution: string;
  url_last_model: string;
  url_metrics: string;
  url_project: string;
  url_report: string;
  requirements: {
    software: string;
    pip: string[];
    conda: any[];
  };
  metrics: { [key: string]: number };
  infrastructure: {
    training_time: 5220;
    average_cost: 200;
    total_budget: 500;
    currency: 'USD';
    used_machines: 2;
    total_machines: 3;
  };
  configuration: { [key: string]: string };
  commit: {
    last_commit: {
      description: string;
    };
  };
  checked: boolean;
}
