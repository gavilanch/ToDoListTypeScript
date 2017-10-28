import {Tasks} from './Tasks'
import {Task} from './Task'

let tasks = new Tasks();

document.getElementById('addTask')!.addEventListener('click', handleAddTaskClick);

function handleAddTaskClick(){

    let inputTask: HTMLInputElement = <HTMLInputElement>document.getElementById('inputTask');
    let inputTaskValue = inputTask.value;
    if (inputTaskValue === "") {
        return;
    }

    let id = tasks.getNewId();

    let task : Task = {
        id: id,
        description: inputTaskValue,
        done: false
    };

    tasks.push(task);

}

document.getElementById('inputTask')!.addEventListener('keydown', function (event: KeyboardEvent) {
    if (event.keyCode === 13) {
        handleAddTaskClick();
    }
}, true);

document.getElementById('removeAll')!.addEventListener('click', function(){
    tasks.removeAll();
}); 


document.getElementById('markAllAsDone')!.addEventListener('click', function () {
    tasks.markAllAsDone();
});
