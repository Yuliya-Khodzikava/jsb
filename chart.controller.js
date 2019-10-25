class ChartController {
    constructor(ChartView, DatasetModel){
        this.chartView =  new ChartView(targetSelector, {getChartPoints: this.getChartPoints.bind(this)});
        this.datasetModel = DatasetModel;
    }

    getChartPoints(){
        const data = this.datasetModel.getChartPoints();
        this.chartView.render(data);
    }
    
}