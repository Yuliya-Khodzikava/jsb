var DatasetController = function DatasetController(datasetView, datasetModel) {
    this.datasetView = datasetView;
    this.datasetModel = datasetModel;
};
DatasetController.prototype.initialize = function initialize() {
    this.datasetView.onClickAddPoints = this.onClickAddPoints.bind(this);
    this.datasetView.onClickDeletePoints = this.onClickDeletePoints.bind(this);
    this.datasetView.onClickClearAllPoints = this.onClickClearAllPoints.bind(this);
};
DatasetController.prototype.onClickAddPoints = function onClickAddPoints() {
    var xElement = document.getElementById('x');
    var yElement = document.getElementById('y');

    if (xElement.value !== '') {
        if(xElement.value>0 && yElement.value>0){
            var enteredValueX = xElement.value;
            var enteredValueY = yElement.value;

            this.datasetModel.modelData.x.push(enteredValueX);
            this.datasetModel.modelData.y.push(enteredValueY);

            this.datasetView.render(this.datasetModel.modelData);
        }
    } else {
        this.datasetView.render(this.datasetModel.modelData);
    }
};
DatasetController.prototype.onClickDeletePoints = function onClickDeletePoints(e) {
    var i = e.target.parentNode.parentNode.rowIndex;
    document.getElementById('tableContent').deleteRow(i);

    this.datasetModel.modelData.x.splice(i,1);
    this.datasetModel.modelData.y.splice(i,1);
};
DatasetController.prototype.onClickClearAllPoints = function onClickClearAllPoints() {
    while (targetElement.firstChild) { 
        targetElement.removeChild(targetElement.firstChild);
    } 
    this.datasetModel.modelData.x = [];
    this.datasetModel.modelData.y = [];
};

var datasetModel = new DatasetModel();
var targetElement = document.getElementById('tableContent');
var datasetView = new DatasetView(targetElement);
var controller = new DatasetController(datasetView, datasetModel);

controller.initialize();
controller.onClickAddPoints();