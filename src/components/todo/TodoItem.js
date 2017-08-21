import React from 'react';
import { partial } from '../../lib/utils';

export const TodoItem = (props) => {
  // const handleToggle = () => props.handleToggle(props.id)
  const handleToggle = partial(props.handleToggle, props.id)
  return (
    <li>
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
