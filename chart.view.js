class ChartView {
    constructor(selector, handlers){
        this.handlers = handlers;
        this.element = document.querySelector(selector); //general wrapper
        this.chart = this.element.querySelector('.chart'); //chart
        this.table = this.element.querySelector('.tableContent'); //table
        this.addBtn = this.element.querySelector('.addPoints');
        this.clearAllBtn = this.element.querySelector('.clearAllPoints');
        this.prepareHandlers();
        this.show = this.showPoints.bind(this);
        this.getChartPoints = this.handlers.getChartPoints;
    }

    showPoints(){
        this.getChartPoints();
    }

    prepareHandlers(){
        this.addBtn.addEventListener('click', this.show);
    };

    render(viewData){
        const point = document.createElement('DIV');
        point.classList.add('point');
        
        const [x, y] = [viewData[0] === undefined ? '' : viewData[viewData.length-1].x, 
                        viewData[0] === undefined ? '' : viewData[viewData.length-1].y];

        point.style.left = x + "px";
        point.style.bottom = y + "px";

        viewData[0] ? this.chart.appendChild(point) : null;
    
        this.prepareHandlers();
    }
}