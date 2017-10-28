"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task_UIInteraction_1 = require("./Task_UIInteraction");
var Tasks = /** @class */ (function () {
    function Tasks() {
        this._idCount = 0;
        this._tasks = [];
        this._uiInteractor = new Task_UIInteraction_1.Tasks_UIInteraction();
    }
    Tasks.prototype.push = function (task) {
        this._tasks.push(task);
        this._uiInteractor.push(task);
    };
    Tasks.prototype.markAllAsDone = function () {
        this._tasks.forEach(function (value) {
            value.done = true;
        });
        this._uiInteractor.markAllAsDone();
    };
    Tasks.prototype.markAsDone = function (id) {
        var that = this;
        this._tasks.forEach(function (value) {
            if (value.id === id) {
                value.done = true;
                that._uiInteractor.markAsDone(id);
                return false;
            }
        });
    };
    Tasks.prototype.removeAll = function () {
        this._tasks = [];
        this._uiInteractor.removeAll();
    };
    Tasks.prototype.getNewId = function () {
        return this._idCount++;
    };
    return Tasks;
}());
exports.Tasks = Tasks;
