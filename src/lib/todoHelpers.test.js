import { addTodo, findById, toggleTodo, updateTodo } from './todoHelpers';

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
  const actual = findById(findId, startTodos)
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

test('updateTodo should update an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false},
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false},
  ]
  const actual = updateTodo(startTodos, updatedTodo)
  expect(actual).toEqual(expectedTodos);
})

test('updateTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false},
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}
  // const expectedTodos = [
  //   {id: 1, name: 'one', isComplete: false},
  //   {id: 2, name: 'two', isComplete: true},
  //   {id: 3, name: 'three', isComplete: false},
  // ]
  const actual = updateTodo(startTodos, updatedTodo)
  expect(actual).not.toBe(startTodos);
})
