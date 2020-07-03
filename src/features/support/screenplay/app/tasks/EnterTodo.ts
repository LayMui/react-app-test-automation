import { Task } from '@serenity-js/core';
import { Click, Enter} from '@serenity-js/protractor';
import { TodoPage } from '../pageObjects';

export const EnterTodo = {

    of: (todo: any) =>
        Task.where(`#actor enters todo ${ todo }`,
          //  UseAngular.disableSynchronisation(),
            Enter.theValue(todo).into(TodoPage.textInput),
            Click.on(TodoPage.addButton),
        ),
};