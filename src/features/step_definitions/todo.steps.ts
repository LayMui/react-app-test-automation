import { Ensure, contain } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage } from '@serenity-js/core';
import { Navigate, isVisible, Text } from '@serenity-js/protractor';
import { Before, Given, Then, When } from 'cucumber';
import {
    Actors, EnterTodo, RemoveTodo,
} from '../support/screenplay';
import { TodoPage } from '../support/screenplay/app/pageObjects';

Before(() => engage(new Actors()));

const todoItemNames = Text.ofAll(TodoPage.todoList);

Given(/^(.*) is at the todo url page$/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to('/'),
    ));

When(/(.*) enter (?:his|her|their) todo "(.*)"/, (actorName: string, todo: string) =>
actorInTheSpotlight().attemptsTo(
    EnterTodo.of(todo),
));

Then(/(?:he|she|they) is able to see the todo "(.*)" added$/, (todo: string) =>
    actorInTheSpotlight().attemptsTo(
       Ensure.that(TodoPage.deleteButton(todo), isVisible()),
       Ensure.that(todoItemNames, contain(todo)),
));

When(/(.*) remove her todo "(.*)"/, (actorName: string, todo: string) =>
actorInTheSpotlight().attemptsTo(
    RemoveTodo.of(todo),
));

Then(/(?:he|she|they) is able to see the todo "(.*)" removed$/, (todo: string) =>
   actorInTheSpotlight().attemptsTo(
        Ensure.that(TodoPage.addButton, isVisible()),
));
