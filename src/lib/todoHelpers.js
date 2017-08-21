
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
  // const updatedTodos = list.map(item => {
  //   if (item.id === updatedItem.id) return updatedItem
  //   else return item
  // })
  // return updatedTodos
}
