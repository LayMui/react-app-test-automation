@todo
Feature: todo management
    In order manage the todo items
    As a student
    Mary wants to manage her todo items for her school work 

  Background:
    Given Mary is at the todo url page

  Scenario Outline: add todo item
    In order to add the list of todo item 
    As a student Mary
    Mary want to add todo to her list
    When Mary enter her todo "<todo>"
    Then she is able to see the todo added

    Examples:
      | todo |
      | submit projectA |

  