"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mustache = require("mustache");
var Tasks_UIInteraction = /** @class */ (function () {
    function Tasks_UIInteraction() {
    }
    Tasks_UIInteraction.prototype.push = function (task) {
        var template = document.getElementById("template-task-item").innerHTML;
        mustache.parse(template);
        var rendered = mustache.render(template, task);
        document.getElementById("taskList").innerHTML += rendered;
        document.getElementById('inputTask').value = '';
        this.addAmountToBadge(1);
        var tasks = document.getElementsByClassName("list-group-item");
        var markAsDoneButtons = document.getElementsByClassName('markTaskAsDone');
        var removeTaskButtons = document.getElementsByClassName('removeTask');
        for (var i = 0; i < markAsDoneButtons.length; i++) {
            var currentElement = markAsDoneButtons[i];
            currentElement.addEventListener("click", this.handleMarkAsDoneClick.bind(this));
        }
        for (var i = 0; i < removeTaskButtons.length; i++) {
            var currentElement = removeTaskButtons[i];
            currentElement.addEventListener("click", this.handleRemoveTaskClick.bind(this));
        }
    };
    Tasks_UIInteraction.prototype.markAsDone = function (id) {
        var tasks = document.getElementsByClassName("list-group-item");
        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var currentId = Number(task.getAttribute("data-id"));
            if (id === currentId) {
                task.classList.add("task-done");
                break;
            }
        }
        this.addAmountToBadge(-1);
    };
    Tasks_UIInteraction.prototype.markAllAsDone = function () {
        var tasks = document.getElementsByClassName("list-group-item");
        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            task.classList.add("task-done");
        }
        this.assignValueToBadge('0');
    };
    Tasks_UIInteraction.prototype.removeAll = function () {
        var tasks = document.getElementsByClassName('list-group-item');
        while (tasks[0]) {
            tasks[0].remove();
        }
        this.assignValueToBadge('0');
    };
    Tasks_UIInteraction.prototype.assignValueToBadge = function (value) {
        document.getElementById('yourTasksBadge').innerHTML = value;
    };
    Tasks_UIInteraction.prototype.addAmountToBadge = function (amount) {
        var currentValueTaskBadge = Number(document.getElementById('yourTasksBadge').innerHTML);
        document.getElementById('yourTasksBadge').innerHTML = (currentValueTaskBadge + amount).toString();
    };
    Tasks_UIInteraction.prototype.handleMarkAsDoneClick = function (event) {
        var target = event.currentTarget;
        var element = target;
        var row = element.parentElement.parentElement;
        if (!row.classList.contains('task-done')) {
            row.classList.add('task-done');
            this.addAmountToBadge(-1);
        }
    };
    Tasks_UIInteraction.prototype.handleRemoveTaskClick = function (event) {
        var target = event.currentTarget;
        var element = target;
        var row = element.parentElement.parentElement;
        if (!row.classList.contains('task-done')) {
            this.addAmountToBadge(-1);
        }
        row.remove();
    };
    return Tasks_UIInteraction;
}());
exports.Tasks_UIInteraction = Tasks_UIInteraction;
