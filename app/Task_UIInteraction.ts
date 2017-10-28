import {Task} from './Task'
import * as mustache from 'mustache'

export class Tasks_UIInteraction {
    public push(task: Task) {
        var template = document.getElementById("template-task-item")!.innerHTML;
        mustache.parse(template);
        var rendered = mustache.render(template, task);
        document.getElementById("taskList")!.innerHTML += rendered;

        (<HTMLInputElement>document.getElementById('inputTask')!).value = '';

        this.addAmountToBadge(1);

        let tasks = document.getElementsByClassName("list-group-item");

        let markAsDoneButtons = document.getElementsByClassName('markTaskAsDone');
        let removeTaskButtons = document.getElementsByClassName('removeTask');

        for (let i = 0; i < markAsDoneButtons.length; i++) {
            var currentElement = markAsDoneButtons[i];
            currentElement.addEventListener("click", this.handleMarkAsDoneClick.bind(this));
        }

        for (let i = 0; i < removeTaskButtons.length; i++) {
            var currentElement = removeTaskButtons[i];
            currentElement.addEventListener("click", this.handleRemoveTaskClick.bind(this));
        }
    }

    public markAsDone(id: number) {
        let tasks = document.getElementsByClassName("list-group-item");
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            var currentId: number = Number(task.getAttribute("data-id"));
            if (id === currentId) {
                task.classList.add("task-done");
                break;
            }
        }

        this.addAmountToBadge(-1);

    }

    public markAllAsDone() {
        let tasks = document.getElementsByClassName("list-group-item");
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            task.classList.add("task-done");
        }

        this.assignValueToBadge('0');
    }

    public removeAll(){
        var tasks = document.getElementsByClassName('list-group-item');
        while (tasks[0]){
            tasks[0].remove();
        }
        this.assignValueToBadge('0');
    }

    private assignValueToBadge(value: string){
        document.getElementById('yourTasksBadge')!.innerHTML = value;
    }


    public addAmountToBadge(amount: number) {
        var currentValueTaskBadge = Number(document.getElementById('yourTasksBadge')!.innerHTML);
        document.getElementById('yourTasksBadge')!.innerHTML = (currentValueTaskBadge + amount).toString();

    }

    private handleMarkAsDoneClick(event: Event) {
        var target = event.currentTarget;
        var element = <HTMLButtonElement>target;
        var row = element.parentElement!.parentElement!;
        if (!row.classList.contains('task-done')) {
            row.classList.add('task-done');
            this.addAmountToBadge(-1);
        }
    }

    private handleRemoveTaskClick(event: Event) {
        var target = event.currentTarget;
        var element = <HTMLButtonElement>target;
        var row = element.parentElement!.parentElement!;
        if (!row.classList.contains('task-done')) {
            this.addAmountToBadge(-1);
        }
        row.remove();
    }
}