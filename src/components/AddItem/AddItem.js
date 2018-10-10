import React from 'react';

const AddItem = (props) => {
  const titleRef = React.createRef();

  return (
    <form className="todo-list__add" onSubmit={(e) => {
      e.preventDefault();
      props.addTodo(titleRef.current.value)
      e.currentTarget.reset();
      }}>
      <input type="text" placeholder="Add todo..." name="title" id="title" required ref={titleRef} autoComplete="off" />
    </form>
  )
}

export default AddItem;