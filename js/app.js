"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tasks_1 = require("./Tasks");
var tasks = new Tasks_1.Tasks();
document.getElementById('addTask').addEventListener('click', handleAddTaskClick);
function handleAddTaskClick() {
    var inputTask = document.getElementById('inputTask');
    var inputTaskValue = inputTask.value;
    if (inputTaskValue === "") {
        return;
    }
    var id = tasks.getNewId();
    var task = {
        id: id,
        description: inputTaskValue,
        done: false
    };
    tasks.push(task);
}
document.getElementById('inputTask').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        handleAddTaskClick();
    }
}, true);
document.getElementById('removeAll').addEventListener('click', function () {
    tasks.removeAll();
});
document.getElementById('markAllAsDone').addEventListener('click', function () {
    tasks.markAllAsDone();
});
