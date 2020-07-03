import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class TodoPage {
    static textInput     = Target.the('username input').located(by.id('todo-text'));
    static addButton     = Target.the('password input').located(by.id('addTodo-btn'));
    static deleteButton  = Target.the('login button').located(by.id('delete-btn'));
}