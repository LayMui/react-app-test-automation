import { Click } from '@serenity-js/protractor';
import { Task } from '@serenity-js/core';
import { TodoPage } from '../pageObjects';

export const RemoveTodo = {
    of: (todo: string) =>
        Task.where(`#actor select todo ${ todo } to remove`,
            Click.on(TodoPage.deleteButton(todo)),
        ),
};