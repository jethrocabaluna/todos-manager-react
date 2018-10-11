import React from 'react';

import Comments from '../Comments/Comments';

import './Item.scss';

const Item = (props) => {
  const titleRef = React.createRef();
  let listItem = null;
  if (props.onEdit) {
    listItem = (<form 
      styleName="todo-list__item__form"
      onSubmit={(e) => {
      e.preventDefault();
      props.updateTodo(props.itemId, titleRef.current.value);
    }}>
      <input styleName="todo-list__item__input" type="text" defaultValue={props.title.__html} ref={titleRef} autoComplete="off" name="newTitle" id="newTitle" />
    </form>);
  } else {
    listItem = <span dangerouslySetInnerHTML={ props.title }></span>;
  }

  return (
    <li styleName="todo-list__item">
      { listItem }
      <button styleName="todo-list__item__delete" onClick={() => props.removeTodo(props.itemId)}>X</button>
      <button styleName="todo-list__item__edit" onClick={() => props.editTodo(props.itemId)}>Edit</button>
      <input styleName="todo-list__item__status" type="checkbox" checked={ props.isCompleted } onChange={ () => props.toggleStatus(props.itemId) } />
      <Comments />
    </li>
  )
}

export default Item;