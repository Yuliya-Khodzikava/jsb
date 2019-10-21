const datasetModel = new DatasetModel();
const targetElement = document.querySelector('.tableContent');
const datasetView = new DatasetView(targetElement);
const controller = new DatasetController(datasetView, datasetModel);

controller.initialize();
controller.onClickAddPoints();