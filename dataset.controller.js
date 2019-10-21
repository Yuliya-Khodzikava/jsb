class DatasetController {
    constructor(datasetView, datasetModel){
        this.datasetView = datasetView;
        this.datasetModel = datasetModel;
    }

    initialize(){
        this.datasetView.onClickAddPoints = this.onClickAddPoints.bind(this);
        this.datasetView.onClickDeletePoints = this.onClickDeletePoints.bind(this);
        this.datasetView.onClickClearAllPoints = this.onClickClearAllPoints.bind(this);
    }

    onClickAddPoints(){
        const [xElement, yElement] = [document.querySelector('.x'), document.querySelector('.y')];
    
        this.datasetModel.setPoints(xElement, yElement);
        this.datasetView.render(this.datasetModel.modelData);
    }

    onClickDeletePoints(e){
        let target = e.target;

        if(target.className != 'deletePointBtn') return;
    
        const i = target.parentNode.parentNode.rowIndex;
        targetElement.deleteRow(i);
    
        this.datasetModel.modelData.splice(i,1);
    }
    
    onClickClearAllPoints(){
        while (targetElement.firstChild) { 
            targetElement.removeChild(targetElement.firstChild);
        } 
        this.datasetModel.modelData = [];
    }
}