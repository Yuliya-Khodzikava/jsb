class DatasetView {
    constructor(element){
        this.element = element;
        this.onClickAddPoints = null;
        this.wrapper = document.querySelector('.wrapper');
        this.insertTemplate(this.prepareTemplate());
        this.prepareHandlers();
    }

    prepareTemplate(){
        const dataset = 
            '<div class="dataset">'+
                '<input type="number" name="x" class="x">'+
                '<input type="number" name="y" class="y">'+
                '<button class="btn addPoints">Add</button>'+
            '</div>';
        return dataset;
    };
    insertTemplate(value){
        this.wrapper.innerHTML = value;
    };
    prepareHandlers(){
        const addPointsBtn = document.querySelector('.addPoints');
        addPointsBtn.addEventListener('click', this.onClickAddPoints);

        const deletePointsBtn = document.querySelector('.tableContent');
        deletePointsBtn.addEventListener('click', this.onClickDeletePoints);

        const clearAllPointsBtn = document.querySelector('.clearAllPoints');
        clearAllPointsBtn.addEventListener('click', this.onClickClearAllPoints);
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

        viewData[0] ? this.element.insertAdjacentHTML('beforeEnd', template) : null;
        this.prepareHandlers();
    }
}