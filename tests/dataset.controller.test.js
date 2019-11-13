import DatasetView from '../dataset.view';
import DatasetModel from '../model';
import DatasetController from '../dataset.controller';

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

document.documentElement.innerHTML = html.toString();

const model = new DatasetModel();
const controller = new DatasetController(DatasetView, model);

describe('DatasetController', () => {
    beforeEach(()=>{
        spyOn(model, 'addPoints');
        spyOn(model, 'deletePoints');
        spyOn(model, 'clearAllPoints')
    });

    test('should add points to model', () => {
        controller.clickAddPoints('5', '5');
        expect(model.addPoints).toHaveBeenCalled();
    });

    test('should not add points to model, empty values', () => {
        controller.clickAddPoints('', '');
        expect(model.addPoints).not.toHaveBeenCalled();
    });

    test('should not add points to model, 0 values', () => {
        controller.clickAddPoints('0', '0');
        expect(model.addPoints).not.toHaveBeenCalled();
    });

    test('should not add points to model, one value is valid and another is empty', () => {
        controller.clickAddPoints('5', '');
        expect(model.addPoints).not.toHaveBeenCalled();
    });

    test('should not add points to model, negative values', () => {
        controller.clickAddPoints('-5', '-1');
        expect(model.addPoints).not.toHaveBeenCalled();
    });

    test('should delete some points from model', () => {
        controller.clickDeletePoints('1');
        expect(model.deletePoints).toHaveBeenCalledWith('1');
    });

    test('should clear all points from model', () => {
        controller.clickClearAllPoints();
        expect(model.clearAllPoints).toHaveBeenCalled();
    });
});