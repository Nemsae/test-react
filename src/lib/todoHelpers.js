
export const addTodo = (startTodos, newTodo) => [...startTodos, newTodo];

export const generateId = () => Math.floor(Math.random() * 100000)
