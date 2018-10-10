import React from 'react';

const Item = (props) => {
  const titleRef = React.createRef();
  let listItem = null;
  if (props.onEdit) {
    listItem = (<form onSubmit={(e) => {
      e.preventDefault();
      props.updateTodo(props.itemId, titleRef.current.value);
    }}>
      <input type="text" defaultValue={props.title.__html} ref={titleRef} autoComplete="off" name="newTitle" id="newTitle" />
    </form>);
  } else {
    listItem = <span dangerouslySetInnerHTML={ props.title }></span>;
  }

  return (
    <li className="todo-list__item">
      { listItem }
      <input type="checkbox" checked={ props.isCompleted } onChange={ () => props.toggleStatus(props.itemId) } />
      <button onClick={() => props.removeTodo(props.itemId)}>X</button>
      <button onClick={() => props.editTodo(props.itemId)}>Edit</button>
    </li>
  )
}

export default Item;