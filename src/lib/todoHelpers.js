
export const addTodo = (startTodos, newTodo) => {
  const newTodos = [...startTodos, newTodo]
  return newTodos;
}
