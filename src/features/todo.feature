
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
    Then she is able to see the todo "<todo>" added

    Examples:
      | todo |
      | projectA |

  Scenario Outline: remove todo item
    In order to remove the list of todo item 
    As a student Mary
    Mary want to remove todo from her list
    When Mary enter her todo "<todo>"
    And Mary remove her todo "<todo>"
    Then she is able to see the todo "<todo>" removed

    Examples:
      | todo |
      | projectA |