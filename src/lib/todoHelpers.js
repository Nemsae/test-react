
export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random() * 100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})
// export const toggleTodo = (todo) => {
//   const updatedTodo = Object.assign({}, todo, {
//     isComplete: true,
//   })
//   return updatedTodo;
// }

export const updateTodo = (list, updatedItem) => {
  const updatedIndex = list.findIndex(item => item.id === updatedItem.id)
  return [
    ...list.slice(0, updatedIndex),
    updatedItem,
    ...list.slice(updatedIndex + 1)
  ]
}

export const filterTodos = (list, route) => {
  switch (route) {
    case '/':
      return list
      break;
    case '/complete':
      return list.filter(item => item.isComplete === true)
      break;
    case '/active':
      return list.filter(item => item.isComplete === false)
      break;
    default:

  }
}
