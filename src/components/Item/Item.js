import React from 'react';

const Item = (props) => {
  return (
    <li className="todo-list__item">
      <span dangerouslySetInnerHTML={ props.title }></span>
      <input type="checkbox" checked={ props.isCompleted } onChange={ () => props.toggleStatus(props.itemId) } />
    </li>
  )
}

export default Item;