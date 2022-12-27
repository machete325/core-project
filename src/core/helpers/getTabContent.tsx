import React from 'react';
import ExperimentDescription from '../../Pages/Projects/ProjectPages/Experiments/Description/Description';
import ExperimentTarget from '../../Pages/Projects/ProjectPages/Experiments/Target/Target';
import ExperimentDatasetContainer from '../../Pages/Projects/ProjectPages/Experiments/Dataset/DatasetContainer';
import ExperimentMainMetrics from '../../Pages/Projects/ProjectPages/Experiments/MainMetrics/MainMetrics';
import ExperimentModelConfiguration from '../../Pages/Projects/ProjectPages/Experiments/ModelConfiguration/ModelConfiguration';
import ExperimentInfrastructure from '../../Pages/Projects/ProjectPages/Experiments/Infrastructure/Infrastructure';
import ExperimentCommitDescription from '../../Pages/Projects/ProjectPages/Experiments/CommitDescription/CommitDescription';
import DatasetOverview from '../../Pages/Projects/ProjectPages/Datasets/Overview/Overview';
import DatasetPrice from '../../Pages/Projects/ProjectPages/Datasets/Price/Price';
import { IProject } from '../../types/project/project';
import DatasetDailySales from '../../Pages/Projects/ProjectPages/Datasets/DailySales/DailySales';
import DatasetItemDistribution from '../../Pages/Projects/ProjectPages/Datasets/ItemDistribution/ItemDistribution';
import DatasetCategoryDistribution from '../../Pages/Projects/ProjectPages/Datasets/CategoryDistribution/CategoryDistribution';
import DatasetShopDistribution from '../../Pages/Projects/ProjectPages/Datasets/ShopDistribution/ShopDistribution';
import DatasetJupyterView from '../../Pages/Projects/ProjectPages/Datasets/JupyterView/JupyterView';
import MonitoringOverview from '../../Pages/Projects/ProjectPages/Monitoring/Overview/Overview';
import DataDrift from '../../Pages/Projects/ProjectPages/Monitoring/DataDrift/DataDrift';
import ConceptDrift from '../../Pages/Projects/ProjectPages/Monitoring/ConceptDrift/ConceptDrift';
import MonitoringInfrastructure from '../../Pages/Projects/ProjectPages/Monitoring/Infrastructure/Infrastructure';
import InfrastructureDetails from '../../Pages/Projects/ProjectPages/Infrastructure/Details/Details';
import InfrastructureHardware from '../../Pages/Projects/ProjectPages/Infrastructure/Hardware/Hardware';
import InfrastructureOperationSystem from '../../Pages/Projects/ProjectPages/Infrastructure/OperationSystem/OperationSystem';

// Keys to switch, obtained from the configuration file according to the specific page

const returnExperimentTabs = (
  type: string,
  data: any,
  projectData: IProject,
) => {
  if (data) {
    switch (type) {
      case 'description':
        return <ExperimentDescription data={data} />;
      case 'target':
        return <ExperimentTarget data={data} projectData={projectData} />;
      case 'data':
        return (
          <ExperimentDatasetContainer data={data} projectData={projectData} />
        );
      case 'metrics':
        return <ExperimentMainMetrics data={data} projectData={projectData} />;
      case 'configuration':
        return (
          <ExperimentModelConfiguration data={data} projectData={projectData} />
        );
      case 'infrastructure':
        return (
          <ExperimentInfrastructure data={data} projectData={projectData} />
        );
      case 'last_commit':
        return (
          <ExperimentCommitDescription data={data} projectData={projectData} />
        );
      default:
        return null;
    }
  }
  return null;
};

const returnDatasetTabs = (type: string, data: any) => {
  if (data) {
    switch (type) {
      case 'description':
        return <DatasetOverview data={data} />;
      case 'price':
        return <DatasetPrice data={data} />;
      case 'dailySales':
        return <DatasetDailySales data={data} />;
      case 'itemDistribution':
        return <DatasetItemDistribution data={data} />;
      case 'categoryDistribution':
        return <DatasetCategoryDistribution data={data} />;
      case 'shopDistribution':
        return <DatasetShopDistribution data={data} />;
      case 'jupyterView':
        return <DatasetJupyterView data={data} />;
      default:
        return null;
    }
  }
  return null;
};

const returnMonitoringTabs = (type: string, data: any) => {
  if (data) {
    switch (type) {
      case 'overview':
        return <MonitoringOverview data={data} />;
      case 'dataDrift':
        return <DataDrift data={data} />;
      case 'conceptDrift':
        return <ConceptDrift data={data} />;
      case 'infrastructure':
        return <MonitoringInfrastructure data={data} />;
      default:
        return null;
    }
  }
  return null;
};

const returnInfrastructureTabs = (type: string, data: any) => {
  if (data) {
    switch (type) {
      case 'details_and_costs':
        return <InfrastructureDetails data={data} />;
      case 'hardware':
        return <InfrastructureHardware data={data} />;
      case 'operating_system':
        return <InfrastructureOperationSystem data={data} />;
      default:
        return null;
    }
  }
  return null;
};

export const getTabContent = (
  tab: { type: string; path: string; page: string },
  data: any,
  projectData: IProject,
) => {
  if (tab.page === 'experiments' || tab.page === 'overview') {
    return returnExperimentTabs(tab.type, data, projectData);
  }
  if (tab.page === 'datasets') {
    return returnDatasetTabs(tab.type, data);
  }
  if (tab.page === 'monitoring') {
    return returnMonitoringTabs(tab.type, data);
  }
  if (tab.page === 'infrastructure') {
    return returnInfrastructureTabs(tab.type, data);
  }
  return '';
};
