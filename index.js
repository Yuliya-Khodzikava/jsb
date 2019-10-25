const targetSelector = '.main';
const datasetModel = new DatasetModel();
const controller = new DatasetController(DatasetView, datasetModel);
const chartController = new ChartController(ChartView, datasetModel);

controller.clickAddPoints('','');
chartController.getChartPoints();