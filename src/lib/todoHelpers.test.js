import { addTodo, findById, toggleTodo } from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const actual = addTodo(startTodos, newTodo)

  expect(actual).toEqual(expected);
})

test('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const actual = addTodo(startTodos, newTodo)

  expect(actual).not.toBe(expected);
})

test('findById should return expected item from array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false},
  ]
  const findId = 3;
  const expected = {id: 3, name: 'three', isComplete: false}
  const actual = findById(startTodos, findId)
  expect(actual).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const startTodo = {id: 1, name: 'Blah', isComplete: false};
  const expected = {id: 1, name: 'Blah', isComplete: true};
  const actual = toggleTodo(startTodo);
  expect(actual).toEqual(expected);
})

test('toggleTodo should not mutate the existing todo', () => {
  const startTodo = {id: 1, name: 'Blah', isComplete: false};
  const actual = toggleTodo(startTodo);
  expect(actual).not.toBe(startTodo);
})
