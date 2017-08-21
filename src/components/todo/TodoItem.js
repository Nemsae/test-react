import React from 'react';
import { partial } from '../../lib/utils';

export const TodoItem = (props) => {
  // const handleToggle = () => props.handleToggle(props.id)
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <span onClick={handleRemove} className='delete'>X</span>
      <input onClick={handleToggle} type="checkbox" defaultChecked={props.isComplete}/>
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
}
