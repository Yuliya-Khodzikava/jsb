var DatasetView = function DatasetView(element) {
    this.element = element;
    this.onClickAddPoints = null;
};
DatasetView.prototype.render = function render(viewData) {
    var template = 
        '<tr>' +
			'<td>' + viewData.x[viewData.x.length-1] + '</td>' +
			'<td>' + viewData.y[viewData.y.length-1] + '</td>' +
			'<td><button class="deletePointBtn">X</button></td>' +
        '</tr>';

    viewData.x[0] && viewData.y[0] ? this.element.insertAdjacentHTML('beforeEnd', template) : null;
    
    var addPointsBtn = document.getElementById('addPoints');
    addPointsBtn.addEventListener('click', this.onClickAddPoints);

    var deletePointsBtn = document.querySelectorAll('.deletePointBtn');
    for(var i=0;i<deletePointsBtn.length;i++){
        deletePointsBtn[i].addEventListener('click', this.onClickDeletePoints);
    };

    var clearAllPointsBtn = document.getElementById('clearAllPoints');
    clearAllPointsBtn.addEventListener('click', this.onClickClearAllPoints);
};