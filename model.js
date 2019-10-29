class DatasetModel {
    constructor(){
        this.modelData = [];
    }

    addPoints(xValue, yValue){
        this.modelData.push({x: xValue, y: yValue});
    };

    deletePoints(i){
        this.modelData.splice(i,1);
    }

    clearAllPoints(){
        this.modelData = [];
    }

    getChartPoints(){
        return this.modelData;
    }
}

module.exports = DatasetModel