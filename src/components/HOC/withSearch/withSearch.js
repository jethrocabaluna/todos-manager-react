import React from 'react';

import './withSearch.scss';

const withSearch = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: ''
    }

    handleSearch = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

    showMatches = (text, searchText) => {
    if (searchText !== '') {
      const re = new RegExp(searchText, "ig");
      const matches = text.match(re);
      const styled = text.replace(re, '<span class="search-highlight">' + searchText + '</span>');
      return { __html: styled };
    }
      return { __html: text };
    }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div styleName={ this.props.listName ? "todo-search-wrapper" : "" }>
          <div styleName="search-component">
            <input styleName="search-component__input" type="text" onChange={this.handleSearch} placeholder={this.props.listName ? "Search Todo" : "Search..."} />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} showMatches={ this.showMatches } {...this.props} />
        </div>
      )
    }
  }
}

export default withSearch;