
export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random() * 100000)

export const findById = (list, id) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})
// 
// export const toggleTodo = (todo) => {
//   const updatedTodo = Object.assign({}, todo, {
//     isComplete: true,
//   })
//   return updatedTodo;
// }

// export const findById = (list, id) => {
//   let listItem;
//   for (let i = 0; i < list.length; i++) {
//     const item = list[i];
//     if (item.id === id) listItem = item;
//     if (listItem !== undefined) break;
//   }
//   console.log('listItem: ', listItem);
//   return listItem;
// }
