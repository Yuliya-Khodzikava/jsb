class DatasetView {
    constructor(selector, handlers){
        this.handlers = handlers;
        this.element = document.querySelector(selector); //general wrapper
        this.datasetForm = this.element.querySelector('.datasetForm'); //inputs
        this.table = this.element.querySelector('.tableContent'); //table
        this.insertTemplate(this.prepareTemplate());
        this.addBtn = this.element.querySelector('.addPoints');
        this.clearAllBtn = this.element.querySelector('.clearAllPoints');
        this.prepareHandlers();
        this.onDelete = this.onClickDeletePoints.bind(this);
        this.onAdd = this.onClickAddPoints.bind(this);
        this.onClearAll = this.onClickClearAllPoints.bind(this);
        this.clickAddPoints = this.handlers.clickAddPoints;
        this.clickDeletePoints = this.handlers.clickDeletePoints;
        this.clickClearAllPoints = this.handlers.clickClearAllPoints;
    }

    prepareTemplate(){
        const dataset = 
            '<div class="dataset">'+
                '<input type="number" name="x" class="x">'+
                '<input type="number" name="y" class="y">'+
                '<button class="btn addPoints">Add</button>'+
            '</div>';
        return dataset;
    }

    insertTemplate(value){
        this.datasetForm.innerHTML = value;
    }

    onClickDeletePoints(e){
        let target = e.target;
        
        const i = target.closest('tr').rowIndex;

        if(target.className !== 'deletePointBtn') return;
        
        this.table.deleteRow(i);
        this.clickDeletePoints(i);
    }

    onClickAddPoints(){
        const x = this.datasetForm.querySelector('.x');
        const y = this.datasetForm.querySelector('.y');
        const [enteredValueX, enteredValueY] = [x.value, y.value];
        
        this.clickAddPoints(enteredValueX, enteredValueY);
    }

    onClickClearAllPoints(){
        while (this.table.firstChild) { 
            this.table.removeChild(this.table.firstChild);
        }
        this.clickClearAllPoints();
    }
    
    prepareHandlers(){
        this.addBtn.addEventListener('click', this.onAdd);
        this.table.addEventListener('click', this.onDelete);
        this.clearAllBtn.addEventListener('click', this.onClearAll);
    };

    render(viewData){
        const [x, y] = [viewData[0] === undefined ? '' : viewData[viewData.length-1].x, 
                        viewData[0] === undefined ? '' : viewData[viewData.length-1].y];
        const template = 
            '<tr class="table-row">' +
                '<td class="table-data">' + x + '</td>' +
                '<td class="table-data">' + y + '</td>' +
                '<td class="table-data"><button class="deletePointBtn">X</button></td>' +
            '</tr>';

        viewData[0] ? this.table.insertAdjacentHTML('beforeEnd', template) : null;
        this.prepareHandlers();
    }
}

module.exports = DatasetView