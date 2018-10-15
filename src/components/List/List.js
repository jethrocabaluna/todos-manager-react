import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import withSearch from '../HOC/withSearch/withSearch';
import { fetchData } from '../../services/apiService';
import commentsList from '../../dataSamples/commentsList';

import './List.scss';

class List extends React.Component {
  static propTypes = {
    searchTerm: PropTypes.string,
    fetchUrl: PropTypes.string,
    listName: PropTypes.string,
    apiData: PropTypes.array
  };

  constructor() {
    super();

    this.toggleStatus = this.toggleStatus.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  state = {
    listItems: [],
    editing: {
      isTrue: false,
      item: {}
    },
    withSearchedComment: []
  }

  updateList() {
    const { fetchUrl, apiData } = this.props;
    if (fetchUrl && !apiData) {
      fetchData(fetchUrl)
        .then(data => {
          const listItems = data.length > 6 ? data.slice(0, 6) : data;
          listItems.map(item => {
            item.comments = commentsList;
          });
          this.setState({ listItems });
        });
    } else if (apiData && !fetchUrl) {
      const listItems = apiData;
      this.setState({ listItems });
    }
  }

  toggleStatus(itemId) {
    const listItems = this.state.listItems.slice();
    const itemIndex = listItems.indexOf(listItems.find(item => {
      return item.id === itemId;
    }));
    listItems[itemIndex].completed = !listItems[itemIndex].completed;
    this.setState({ listItems });
  }

  addTodo(title) {
    const newTodo = {
      userId: 1,
      id: this.state.listItems.length + 1,
      title,
      completed: false
    };
    const listItems = this.state.listItems.slice();
    listItems.push(newTodo);
    this.setState({ listItems });
  }

  removeTodo(itemId) {
    const listItems = this.state.listItems.slice();
    const itemIndex = listItems.indexOf(listItems.find(item => {
      return item.id === itemId;
    }));
    listItems.splice(itemIndex, 1);
    this.setState({ listItems });
  }

  editTodo(itemId) {
    const itemIndex = this.state.listItems.indexOf(this.state.listItems.find(item => {
      return item.id === itemId;
    }));
    this.setState({
      editing: {
        isTrue: true,
        item: this.state.listItems[itemIndex]
      }
    })
  }

  updateTodo(itemId, newTitle) {
    const listItems = this.state.listItems.slice();
    const itemIndex = listItems.indexOf(listItems.find(item => {
      return item.id === itemId;
    }));
    listItems[itemIndex].title = newTitle;
    this.setState({
      listItems,
      editing: {
        isTrue: false,
        item: {}
      }
    });
  }

  getCommentTexts(comments) {
    let text = '';
    comments.forEach(comment => {
      text += `${comment.name} ${comment.email} ${comment.body}`;
    });
    return text;
  }

  componentDidMount() {
    this.updateList();
  }

  render () {
    const { listName, showMatches, globalSearchTerm } = this.props;
    const searchTerm = globalSearchTerm !== '' ? globalSearchTerm : this.props.searchTerm;
    return (
      <div styleName="todo-list">
        <h1 styleName="todo-list__name">{listName}</h1>
        <AddItem 
          addTodo={this.addTodo} />
        <ol styleName="todo-list__items">
          {
            this.state.listItems.filter(item => (
              globalSearchTerm !== '' ? 
              `${item.title} ${item.comments ? this.getCommentTexts(item.comments) : ''}` : 
              item.title).toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0).map(item => (
              <Item 
                key={item.id} 
                globalSearchTerm={globalSearchTerm} 
                itemId={item.id} 
                isCompleted={item.completed} 
                title={showMatches(item.title, searchTerm)} 
                toggleStatus={this.toggleStatus} 
                removeTodo={ this.removeTodo } 
                editTodo={ this.editTodo } 
                onEdit={ item === this.state.editing.item } 
                updateTodo={ this.updateTodo } 
                comments={ item.comments } />
            ))
          }
        </ol>
      </div>
    )
  }
}

export default withSearch(List);