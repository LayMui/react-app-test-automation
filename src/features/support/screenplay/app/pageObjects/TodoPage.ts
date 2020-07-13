import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class TodoPage {
    static textInput     = Target.the('username input').located(by.id('todo-text'));
    static addButton     = Target.the('password input').located(by.id('addTodo-btn'));
    static todoList = Target.all('todo list').located(by.css('li span'));
    static deleteButton = (todo: string) => 
       // Target.the(`${todo} delete button`).located(by.css('`button[data-qa=delete-${todo}]`'));
        Target.the(`${todo} delete button`).located(by.id('delete-btn'));
}

