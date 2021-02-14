import { Component, Input} from '@angular/core';

@Component({
selector: 'custom-todoList',
templateUrl: './todolist.component.html'

})

export class ToDoListComponent {
    @Input()
    task: string;
    todoList:string[] =[];
    constructor() {}

    addTask(){
        this.todoList.push(this.task);
    }
}
