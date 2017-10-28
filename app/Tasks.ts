import {Task} from './Task'
import {Tasks_UIInteraction} from './Task_UIInteraction'

class Tasks{
    private _idCount : number = 0;
    private _tasks : Array<Task> = [];
    private _uiInteractor: Tasks_UIInteraction = new Tasks_UIInteraction();

    public push(task: Task){
        this._tasks.push(task);
        this._uiInteractor.push(task);
    }

    public markAllAsDone(): void {
        this._tasks.forEach(function (value) {
            value.done = true;
        });
        this._uiInteractor.markAllAsDone();
    }

    public markAsDone(id: number): void {
        var that = this;
        this._tasks.forEach(function (value) {
            if (value.id === id) {
                value.done = true;
                that._uiInteractor.markAsDone(id);
                return false;
            }
        });
    }

    public removeAll(){
        this._tasks = [];
        this._uiInteractor.removeAll();
    }

    public getNewId(){
        return this._idCount++;
    }

}

export {Tasks}