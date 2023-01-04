export const returnGraphNavigationMargins = () => {
  const data: any = {
    databaseMarginLeft: undefined,
    experimentsMarginLeft: undefined,
    dataMonitoringMarginLeft: undefined,
    modelMonitoringMarginLeft: undefined,
    modelServingMarginLeft: undefined,
  };

  // maintenance params
  const maintenance = document.getElementById('graph-navigation-maintenance');
  const maintenanceWidth = maintenance?.style.width.replace('px', '');
  const maintenanceMarginLeft = maintenance?.style.marginLeft.replace('px', '');

  // datasets params
  const datasets = document.getElementById('graph-navigation-datasets');
  const datasetsWidth = datasets?.style.width.replace('px', '');
  const datasetsMarginLeft = datasets?.style.marginLeft.replace('px', '');

  // experiments params
  const experiments = document.getElementById('graph-navigation-experiments');
  const experimentsWidth = experiments?.style.width.replace('px', '');

  // database params
  const database = document.getElementById('graph-navigation-database');
  const databaseWidth = database?.style.width.replace('px', '');
  const databaseMarginLeft = database?.style.marginLeft.replace('px', '');

  // data labeling (web) params
  const dataLabeling = document.getElementById(
    'graph-navigation-data_labeling_web',
  );
  const dataLabelingWidth = dataLabeling?.style.width.replace('px', '');
  const dataLabelingMarginLeft = dataLabeling?.style.marginLeft.replace(
    'px',
    '',
  );

  // data exploration params
  const dataExploration = document.getElementById(
    'graph-navigation-data_exploration',
  );
  const dataExplorationWidth = dataExploration?.style.width.replace('px', '');
  const dataExplorationMarginLeft = dataExploration?.style.marginLeft.replace(
    'px',
    '',
  );

  // ML Model params
  const mlModel = document.getElementById('graph-navigation-ml_model');
  const mlModelWidth = mlModel?.style.width.replace('px', '');
  const mlModelMarginLeft = mlModel?.style.marginLeft.replace('px', '');

  // Evaluation params
  const evaluation = document.getElementById('graph-navigation-evaluation');
  const evaluationMarginLeft = evaluation?.style.marginLeft.replace('px', '');

  // Data stream params
  const dataStream = document.getElementById('graph-navigation-api_data');
  const dataStreamWidth = dataStream?.style.width.replace('px', '');
  const dataStreamMarginLeft = dataStream?.style.marginLeft.replace('px', '');

  // Data monitoring params
  const dataMonitoring = document.getElementById(
    'graph-navigation-data_monitoring',
  );
  const dataMonitoringWidth = dataMonitoring?.style.width.replace('px', '');
  const dataMonitoringMarginLeft = dataMonitoring?.style.marginLeft.replace(
    'px',
    '',
  );

  // Model monitoring params
  const modelMonitoring = document.getElementById(
    'graph-navigation-monitoring',
  );
  const modelMonitoringWidth = modelMonitoring?.style.width.replace('px', '');

  // keys params
  const infrastructureKey = document.getElementById('graph-infrastructure-key');
  const infrastructureKeyWidth = infrastructureKey?.clientWidth;
  const researchKey = document.getElementById('graph-research-key');
  const researchKeyWidth = researchKey?.clientWidth;
  const productionKey = document.getElementById('graph-production-key');
  const productionKeyWidth = productionKey?.clientWidth;

  // database
  if (
    maintenanceWidth
    && maintenanceMarginLeft
    && infrastructureKeyWidth
    && researchKeyWidth
    && datasetsMarginLeft
    && datasetsWidth
    && databaseWidth
  ) {
    const updatedDatabaseMarginLeft = parseFloat(datasetsMarginLeft)
      + (infrastructureKeyWidth - researchKeyWidth)
      - (parseFloat(maintenanceWidth) + parseFloat(maintenanceMarginLeft))
      + (parseFloat(datasetsWidth) - parseFloat(databaseWidth)) / 2
      + 0.2;
    data.databaseMarginLeft = updatedDatabaseMarginLeft;
  }

  // experiments
  if (
    maintenanceWidth
    && maintenanceMarginLeft
    && infrastructureKeyWidth
    && researchKeyWidth
    && datasetsMarginLeft
    && datasetsWidth
    && databaseWidth
    && databaseMarginLeft
    && dataLabelingWidth
    && dataLabelingMarginLeft
    && dataExplorationWidth
    && dataExplorationMarginLeft
    && mlModelMarginLeft
    && mlModelWidth
    && experimentsWidth
  ) {
    const keyDifference = infrastructureKeyWidth - researchKeyWidth;
    const updatedExperimentsMarginLeft = parseFloat(maintenanceWidth)
      + parseFloat(maintenanceMarginLeft)
      + parseFloat(databaseWidth)
      + parseFloat(data.databaseMarginLeft)
      + parseFloat(dataLabelingWidth)
      + parseFloat(dataLabelingMarginLeft)
      + parseFloat(dataExplorationWidth)
      + parseFloat(dataExplorationMarginLeft)
      + parseFloat(mlModelMarginLeft)
      - keyDifference
      - (parseFloat(datasetsWidth) + parseFloat(datasetsMarginLeft))
      + (parseFloat(mlModelWidth) - parseFloat(experimentsWidth)) / 2
      - 0.2;
    data.experimentsMarginLeft = updatedExperimentsMarginLeft;
  }

  // data monitoring
  if (
    maintenanceWidth
    && maintenanceMarginLeft
    && productionKeyWidth
    && researchKeyWidth
    && databaseWidth
    && databaseMarginLeft
    && dataLabelingWidth
    && dataLabelingMarginLeft
    && dataStreamWidth
    && dataStreamMarginLeft
    && dataExplorationMarginLeft
    && dataMonitoringWidth
    && dataExplorationWidth
  ) {
    const keyDifference = productionKeyWidth - researchKeyWidth;
    const updatedDataMonitoringMarginLeft = parseFloat(maintenanceWidth)
      + parseFloat(maintenanceMarginLeft)
      + parseFloat(databaseWidth)
      + parseFloat(data.databaseMarginLeft)
      + parseFloat(dataLabelingWidth)
      + parseFloat(dataLabelingMarginLeft)
      + parseFloat(dataExplorationMarginLeft)
      - keyDifference
      - (parseFloat(dataStreamWidth) + parseFloat(dataStreamMarginLeft));
    data.dataMonitoringMarginLeft = updatedDataMonitoringMarginLeft + 0.2;
  }

  // model monitoring
  if (
    maintenanceWidth
    && maintenanceMarginLeft
    && productionKeyWidth
    && researchKeyWidth
    && databaseWidth
    && databaseMarginLeft
    && dataLabelingWidth
    && dataLabelingMarginLeft
    && dataStreamWidth
    && dataStreamMarginLeft
    && dataExplorationMarginLeft
    && dataMonitoringWidth
    && dataExplorationWidth
    && mlModelMarginLeft
    && mlModelWidth
    && modelMonitoringWidth
    && dataMonitoringMarginLeft
  ) {
    const keyDifference = productionKeyWidth - researchKeyWidth;
    const updatedModelMonitoringMarginLeft = parseFloat(maintenanceWidth)
      + parseFloat(maintenanceMarginLeft)
      + parseFloat(databaseWidth)
      + parseFloat(data.databaseMarginLeft)
      + parseFloat(dataLabelingWidth)
      + parseFloat(dataLabelingMarginLeft)
      + parseFloat(dataExplorationMarginLeft)
      + parseFloat(dataExplorationWidth)
      + parseFloat(mlModelMarginLeft)
      - keyDifference
      - (parseFloat(dataStreamWidth)
        + parseFloat(dataStreamMarginLeft)
        + parseFloat(dataMonitoringWidth)
        + parseFloat(data.dataMonitoringMarginLeft))
      + (parseFloat(mlModelWidth) - parseFloat(modelMonitoringWidth)) / 2;

    data.modelMonitoringMarginLeft = updatedModelMonitoringMarginLeft + 0.2;
  }

  // model serving
  if (
    maintenanceWidth
    && maintenanceMarginLeft
    && productionKeyWidth
    && researchKeyWidth
    && databaseWidth
    && databaseMarginLeft
    && dataLabelingWidth
    && dataLabelingMarginLeft
    && dataStreamWidth
    && dataStreamMarginLeft
    && dataExplorationMarginLeft
    && dataMonitoringWidth
    && dataExplorationWidth
    && mlModelMarginLeft
    && mlModelWidth
    && modelMonitoringWidth
    && dataMonitoringMarginLeft
    && evaluationMarginLeft
  ) {
    const keyDifference = productionKeyWidth - researchKeyWidth;
    const updatedModelServingMarginLeft = parseFloat(maintenanceWidth)
      + parseFloat(maintenanceMarginLeft)
      + parseFloat(databaseWidth)
      + parseFloat(data.databaseMarginLeft)
      + parseFloat(dataLabelingWidth)
      + parseFloat(dataLabelingMarginLeft)
      + parseFloat(dataExplorationMarginLeft)
      + parseFloat(dataExplorationWidth)
      + parseFloat(mlModelMarginLeft)
      + parseFloat(mlModelWidth)
      + parseFloat(evaluationMarginLeft)
      - keyDifference
      - (parseFloat(dataStreamWidth)
        + parseFloat(dataStreamMarginLeft)
        + parseFloat(dataMonitoringWidth)
        + parseFloat(data.dataMonitoringMarginLeft)
        + parseFloat(modelMonitoringWidth)
        + parseFloat(data.modelMonitoringMarginLeft));

    data.modelServingMarginLeft = updatedModelServingMarginLeft + 0.2;
  }

  return data;
};
