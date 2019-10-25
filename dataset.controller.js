class DatasetController {
    constructor(DatasetView, DatasetModel){
        this.datasetView =  new DatasetView(targetSelector, {
                                            clickAddPoints: this.clickAddPoints.bind(this),
                                            clickDeletePoints: this.clickDeletePoints.bind(this),
                                            clickClearAllPoints: this.clickClearAllPoints.bind(this)
                                            });      
        this.datasetModel = DatasetModel;
    }

    clickAddPoints(xVal, yVal){
        const isValid = isValidPoints(xVal, yVal);
        if(isValid){
            this.datasetModel.addPoints(xVal, yVal);
        };
        this.datasetView.render(this.datasetModel.modelData);
    }

    clickDeletePoints(index){
        this.datasetModel.deletePoints(index);
    }
    
    clickClearAllPoints(){
        this.datasetModel.clearAllPoints();
    }
}