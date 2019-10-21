class DatasetModel {
    constructor(){
        this.modelData = [];
    }

    setPoints(x, y){
        if (x.value !== '' && x.value>0 && y.value>0) {
            const enteredValueX = x.value;
            const enteredValueY = y.value;
            
            this.modelData.push({x: enteredValueX, y: enteredValueY});
        }
    };
}