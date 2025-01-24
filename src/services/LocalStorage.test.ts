// @vitest-environment jsdom

import { describe, expect, test } from 'vitest';
import { addTodo, getAllTodos, changeTodoStatus } from './LocalStorage';

describe('LocalStorage проверка', () => {
  test('Получаем todos из пустого localstorage', () => {
    expect(getAllTodos()).toEqual([]);
  });

  test('Получаем todos из заполненного localstorage', () => {
    localStorage.clear();
    const todo1 = 'test todo text';
    const todo2 = 'test todo text';
    addTodo(todo1);
    addTodo(todo2);
    expect(getAllTodos()).toEqual([
      { description: todo1, active: true },
      { description: todo2, active: true },
    ]);
    expect(getAllTodos().length).toBe(2);
    expect(getAllTodos()).toContainEqual({ description: todo2, active: true });
  });

  test('Проверяем смену статуса todo', () => {
    localStorage.clear();
    const todo = 'test todo text';
    addTodo(todo);
    changeTodoStatus(todo);
    expect(getAllTodos()).toEqual([{ description: todo, active: false }]);
  });
});
