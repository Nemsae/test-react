import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
    console.log('props:TodoList ', props);
  return (
    <div className="Todo-List">
      <ul>
        {
          props.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))
        }
      </ul>
    </div>
  )
}
//
// export const TodoList = (props) => (
//   <div className="Todo-List">
//     <ul>
//       {
//         props.todos.map(todo => (
//           <TodoList todo={todo} />
//         // <li key={todo.id}>
//         //   <input type="checkbox" defaultChecked={todo.isComplete}/>
//         //   {todo.name}
//         // </li>
//         ))
//       }
//     </ul>
//   </div>
// )
